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
    class="event-modal"
  >
    <div class="event-modal__container" @click.stop v-if="store.eventBeingEdited">
      <label for="event-title">Title:</label>
      <input name="event-title" v-model="store.eventBeingEdited.title" />
      <label for="event-description">Description:</label>
      <input name="event-description" v-model="store.eventBeingEdited.description" />
      <label for="event-start">Start:</label>
      <input name="event-start" type="date" v-model="store.eventBeingEdited.startStr" />
      <label for="event-end" v-if="!store.eventBeingEdited.allDay">End:</label>
      <input
        name="event-end"
        type="date"
        v-if="!store.eventBeingEdited.allDay"
        v-model="store.eventBeingEdited.endStr"
      />
      <label for="event-all-day">Is this all day?</label>
      <input name="event-all-day" type="checkbox" v-model="store.eventBeingEdited.allDay" />
    </div>
  </MyModal>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/eventStore'
import MyModal from '../../MyModal/MyModal.vue'

const store = useEventStore()

const saveAndReset = () => {
  store.saveEventChanges()
  store.resetEventBeingEdited()
}

const discardAndReset = () => {
  store.resetEventBeingEdited()
}

const deleteAndReset = () => {
  if (!store.eventBeingEdited) {
    console.error("Something went wrong - tried to delete an event that doesn't exist.")
    return
  }
  store.deleteEventById(store.eventBeingEdited.id)
  store.resetEventBeingEdited()
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
