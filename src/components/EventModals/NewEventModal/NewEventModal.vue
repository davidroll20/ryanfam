<template>
  <MyModal
    :title="store.modalNew.title"
    :open="store.modalNew.show"
    :onClose="store.closeModalNew"
    :onSave="createAndClose"
    showClose
    showDiscard
    showSave
    class="event-modal"
  >
    <div class="event-modal__container" @click.stop>
      <label for="event-title">Title:</label>
      <input name="event-title" v-model="store.newEvent.title" />
      <label for="event-description">Description:</label>
      <input name="event-description" v-model="store.newEvent.description" />
      <label for="event-start">Start:</label>
      <input name="event-start" type="date" v-model="store.newEvent.startStr" />
      <label for="event-end" v-if="!store.newEvent.allDay">End:</label>
      <input
        name="event-end"
        type="date"
        v-if="!store.newEvent.allDay"
        v-model="store.newEvent.endStr"
      />
      <label for="event-all-day">Is this all day?</label>
      <input name="event-all-day" type="checkbox" v-model="store.newEvent.allDay" />
    </div>
  </MyModal>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/eventStore'
import MyModal from '../../MyModal/MyModal.vue'

const store = useEventStore()

const createAndClose = () => {
  store.createEvent()
  store.closeModalNew()
}
</script>

<style scoped lang="scss">
// @use '@/common/scss/mixins' as *;
@use '/src/style/vars' as *;
.event-modal {
  width: 100%;
  &__container {
    width: 100%;
    height: 100%;
    padding: 4px 8px;
  }
}
</style>
