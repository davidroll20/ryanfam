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
      <div class="bulletin-modal__control">
        <label for="bulletin-title" class="bulletin-modal__control--label">Title:</label>
        <input
          name="bulletin-title"
          class="bulletin-modal__control--input"
          v-model="store.newBulletin.title"
        />
      </div>
      <div class="bulletin-modal__control">
        <label for="bulletin-author" class="bulletin-modal__control--label">Author:</label>
        <input
          name="bulletin-author"
          class="bulletin-modal__control--input"
          v-model="store.newBulletin.author"
        />
      </div>
      <div class="bulletin-modal__control">
        <label for="bulletin-body" class="bulletin-modal__control--label">Body:</label>
        <textarea
          name="bulletin-body"
          class="bulletin-modal__control--input"
          v-model="store.newBulletin.body"
        />
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
    padding: var(--space-sm) var(--space-md);
  }

  &__control {
    display: grid;
    grid-template-columns: 100px 250px;
    margin-bottom: var(--space-md);

    > textarea {
      height: 10rem;
      width: 250px;
    }

    &--label {
      white-space: nowrap;
      grid-column: 1;
    }
    &--input {
      grid-column: 2;
    }
  }
}
</style>
