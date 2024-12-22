<template>
  <MyModal
    :title="store.modalEdit.title"
    :open="store.modalEdit.show"
    :onClose="store.closeModalEdit"
    :onSave="saveAndReset"
    :onDelete="deleteAndReset"
    :onDiscard="discardAndReset"
    showClose
    showDelete
    showDiscard
    showSave
    class="bulletin-modal"
  >
    <div class="bulletin-modal__container" @click.stop v-if="store.bulletinBeingEdited">
      <div class="bulletin-control">
        <label for="bulletin-title">Title:</label>
        <input name="bulletin-title" v-model="store.bulletinBeingEdited.title" />
      </div>
      <div class="bulletin-control">
        <label for="bulletin-body">Body:</label>
        <textarea name="bulletin-body" v-model="store.bulletinBeingEdited.body" />
      </div>
    </div>
  </MyModal>
</template>

<script setup lang="ts">
import { useBulletinStore } from '@/stores/bulletinStore';
import MyModal from '../../MyModal/MyModal.vue';

const store = useBulletinStore();

const saveAndReset = () => {
  store.saveBulletinChanges();
  store.resetBulletinBeingEdited();
};

const discardAndReset = () => {
  store.resetBulletinBeingEdited();
};

const deleteAndReset = () => {
  if (!store.bulletinBeingEdited || !store.bulletinBeingEdited.id) {
    console.error("Something went wrong - tried to delete a bulletin that doesn't exist.");
    return;
  }
  store.deleteBulletinById(store.bulletinBeingEdited.id);
  store.resetBulletinBeingEdited();
};
</script>

<style scoped lang="scss">
// @use '@/common/scss/mixins' as *;
@use '/src/style/vars' as *;
.bulletin-modal {
  width: 100%;
  &__container {
    width: 100%;
    height: 100%;
    padding: 4px 8px;
  }
}
</style>
