<template>
  <main>
    <div v-if="!loginStore.isSignedIn">
      <SimpleLogin></SimpleLogin>
    </div>
    <div class="bulletin-view" v-else>
      <NewBulletinModal v-if="store.modalNew.show" />
      <div class="bulletin-view__cards">
        <button
          class="bulletin-view__card bulletin-view__card--add"
          @click="handleOpenModal()"
          title="Add a new bulletin"
        >
          <unicon
            name="plus-circle"
            fill="var(--ryan-fam-blue)"
            height="48px"
            width="48px"
          ></unicon>
        </button>
        <BulletinCard
          class="bulletin-view__card"
          v-for="bulletin in bulletinsChronological"
          :key="bulletin.id"
          :bulletin="bulletin"
          title="Click to read more"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BulletinCard from '@/components/BulletinCard/BulletinCard.vue';
import NewBulletinModal from '@/components/BulletinModals/NewBulletinModal/NewBulletinModal.vue';
import SimpleLogin from '@/components/SimpleLogin/SimpleLogin.vue';
import { useBulletinStore } from '@/stores/bulletinStore';
import { useLoginStore } from '@/stores/loginStore';
import { computed } from 'vue';

const store = useBulletinStore();
const loginStore = useLoginStore();

const bulletinsChronological = computed(() =>
  [...store.bulletins].sort((a, b) => (a.created < b.created ? 1 : -1)),
);

const handleOpenModal = () => {
  store.initializeNewBulletin();
  store.openModalNew('Create a new bulletin');
};
</script>

<style lang="scss">
.bulletin-view {
  margin-top: var(--space-xl);
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    width: min-content;
    text-decoration: none;
    margin: auto;

    &--add {
      border: 1px solid var(--ryan-fam-blue);
      border-radius: 8px;
      padding: 8px;
      width: 200px;
      height: 200px;
      background-color: grey; //todo var
      font-size: 24px;

      @media (max-width: 700px) {
        width: 220px;
        height: 220px;
      }

      @media (max-width: 500px) {
        width: 240px;
        height: 110px;
      }

      &:hover {
        cursor: pointer;
        border: 1px solid var(--ryan-fam-green);

        svg {
          fill: var(--ryan-fam-green);
        }
      }
    }
  }
}
</style>
