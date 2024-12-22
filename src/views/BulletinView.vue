<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="bulletin-view">
      <NewBulletinModal />
      <EditBulletinModal />
      <button @click="store.openModalNew()">Add</button>
      <div class="bulletin-view__cards">
        <BulletinCard
          class="bulletin-view__card"
          v-for="bulletin in store.bulletins"
          :key="bulletin.id"
          :bulletin="bulletin"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BulletinCard from '@/components/BulletinCard/BulletinCard.vue';
import NewBulletinModal from '@/components/BulletinModals/NewBulletinModal/NewBulletinModal.vue';
import EditBulletinModal from '@/components/BulletinModals/EditBulletinModal/EditBulletinModal.vue';
import { useBulletinStore } from '@/stores/bulletinStore';

const store = useBulletinStore();
</script>

<style lang="scss" scoped>
.bulletin-view {
  &__cards {
    display: grid;
    gap: 8px;
  }

  &__card {
    width: min-content;
  }
}
</style>
