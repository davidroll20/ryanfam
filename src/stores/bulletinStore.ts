import { ref, watch, type Ref } from 'vue';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia';
import { db, ryanFamBulletinsRef, ryanFamCollection } from '@/firebase';
import { deleteDoc, doc, setDoc, updateDoc, type DocumentData } from 'firebase/firestore';
import { useCollection } from 'vuefire';

export type Bulletin = {
  id: string;
  title: string;
  body: string;
};

export const useBulletinStore = defineStore('bulletin', () => {
  type NewBulletin = Omit<Bulletin, 'id'>;

  const bulletins: Ref<Bulletin[]> = ref([]);

  //#region New Bulletin Handling

  /** A persistent object wired up the the fields on the NewBulletinModal */
  const newBulletin: Ref<NewBulletin> = ref({
    title: 'Some title',
    body: 'Some body',
  });

  /** Fired when a new bulletin is created, resetting fields on newBulletin */
  const initializeNewBulletin = () => {
    newBulletin.value.title = '';
    newBulletin.value.body = '';
  };

  /** Fired upon completion of a new bulletin, adding to firebase */
  const finalizeAndAddNewBulletin = () => {
    const newBulletinProps = newBulletin.value;
    createBulletinDocument(newBulletinProps);
  };

  //#region Existing/Edit Bulletin Handling

  const bulletinBeingEdited: Ref<Bulletin | null> = ref({} as Bulletin);

  const setBulletinBeingEdited = (bulletin: Bulletin) => {
    bulletinBeingEdited.value = {
      id: bulletin.id,
      title: bulletin.title,
      body: bulletin.body,
    };
  };

  const saveBulletinChanges = () => {
    if (!bulletinBeingEdited.value) return;
    const bulletinToSave = bulletinBeingEdited.value;
    updateBulletinDocument(bulletinToSave);
  };

  const deleteBulletinById = (bulletinId: string) => {
    const bulletin = bulletins.value.find((x) => x.id === bulletinId);
    if (!bulletin) {
      console.error('No bulletin found with id', bulletinId);
      return;
    }
    deleteBulletinDocument(bulletinId);
  };

  const resetBulletinBeingEdited = () => {
    bulletinBeingEdited.value = null;
  };

  //#region Bulletin translation

  const translateBulletinFromDBToApp = (bulletinFromDb: DocumentData): Bulletin => {
    const translated: Bulletin = {
      id: bulletinFromDb.id,
      title: bulletinFromDb.title ?? 'Untitled',
      body: bulletinFromDb.body ?? '',
    };
    return translated;
  };

  // #region Firebase Integration

  const firebaseBulletins = useCollection(ryanFamBulletinsRef);

  watch(
    firebaseBulletins,
    (newVals) => {
      newVals = [
        {
          id: 'test-id',
          title: 'Test Bulletin',
          body: 'Lorem ipsum dolor sit amet klaatu barata nikto seria fatel sifii',
        },
      ];
      const converted: Bulletin[] = [];
      (newVals as DocumentData[]).forEach((bulletinFromDb) => {
        converted.push(translateBulletinFromDBToApp(bulletinFromDb));
      });
      bulletins.value = [...converted];
    },
    { deep: true },
  );

  async function createBulletinDocument(bulletin: NewBulletin) {
    const newBulletinDocument = {
      id: nanoid(),
      title: bulletin.title,
      body: bulletin.body ?? '',
    };

    const bulletinDocRef = doc(db, ryanFamCollection.BULLETIN, newBulletinDocument.id);

    await setDoc(bulletinDocRef, newBulletinDocument);
  }

  async function updateBulletinDocument(bulletin: Bulletin) {
    if (!bulletin.id) {
      console.error('Cannot update bulletin with no id.');
      return;
    }
    const updatedBulletinDocument = {
      id: bulletin.id,
      title: bulletin.title,
      body: bulletin.body ?? '',
    };

    const bulletinDocRef = doc(db, ryanFamCollection.BULLETIN, updatedBulletinDocument.id);

    await updateDoc(bulletinDocRef, updatedBulletinDocument);
  }

  async function deleteBulletinDocument(id: string) {
    await deleteDoc(doc(db, ryanFamCollection.BULLETIN, id));
  }

  // #region Modals

  const modalNew = {
    show: ref(false),
    title: ref('Create New Bulletin'),
  };

  const modalEdit = {
    show: ref(false),
    title: ref('Edit Bulletin'),
  };

  const openModalNew = (title: string) => {
    modalNew.title.value = title;
    modalNew.show.value = true;
  };

  const closeModalNew = () => {
    modalNew.show.value = false;
  };

  const openModalEdit = (title: string, bulletinToEdit: Bulletin) => {
    setBulletinBeingEdited(bulletinToEdit);
    modalEdit.title.value = title;
    modalEdit.show.value = true;
  };

  const closeModalEdit = () => {
    modalEdit.show.value = false;
  };

  return {
    bulletins,
    newBulletin,
    bulletinBeingEdited,
    initializeNewBulletin,
    finalizeAndAddNewBulletin,
    saveBulletinChanges,
    deleteBulletinById,
    resetBulletinBeingEdited,
    modalNew,
    modalEdit,
    openModalNew,
    closeModalNew,
    openModalEdit,
    closeModalEdit,
  };
});