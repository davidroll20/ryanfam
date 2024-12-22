<template>
  <MyModal
    :title="store.modalNew.title"
    :open="store.modalNew.show"
    :onClose="store.closeModalNew"
    :onSave="createAndClose"
    showClose
    showDiscard
    showSave
    class="bulletin-modal"
  >
    <div class="bulletin-modal__container" @click.stop>
      <div class="bulletin-control">
        <label for="bulletin-title">Title:</label>
        <input name="bulletin-title" v-model="store.newBulletin.title" />
      </div>
      <div class="bulletin-control">
        <label for="bulletin-body">Body:</label>
        <textarea name="bulletin-body" v-model="store.newBulletin.body" />
      </div>
    </div>
  </MyModal>
</template>

<script setup lang="ts">
import { useBulletinStore } from '@/stores/bulletinStore';
import MyModal from '../../MyModal/MyModal.vue';

const store = useBulletinStore();

const createAndClose = () => {
  store.finalizeAndAddNewBulletin();
  store.closeModalNew();
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
