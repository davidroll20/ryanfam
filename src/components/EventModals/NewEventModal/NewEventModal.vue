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
      <div class="event-control">
        <label for="event-title">Title:</label>
        <input name="event-title" v-model="store.newEvent.title" />
      </div>
      <div class="event-control">
        <label for="event-description">Description:</label>
        <textarea name="event-description" v-model="store.newEvent.description" />
      </div>
      <div class="event-control">
        <label for="event-all-day">Is this all day?</label>
        <input name="event-all-day" type="checkbox" v-model="store.newEvent.allDay" />
      </div>
      <div class="event-control">
        <label for="event-start-date">Start Date:</label>
        <input name="event-start-date" type="date" v-model="store.newEvent.startDateStr" />
      </div>
      <div class="event-control" v-if="!store.newEvent.allDay">
        <label for="event-start-time">Start Time:</label>
        <select name="event-start-time" type="select" v-model="store.newEvent.startTimeStr">
          <option v-for="time in timeOptions" :value="time.value" :key="time.display">
            {{ time.display }}
          </option>
        </select>
      </div>
      <div class="event-control">
        <label for="event-end">End:</label>
        <input name="event-end" type="date" v-model="store.newEvent.endDateStr" />
      </div>
      <div class="event-control" v-if="!store.newEvent.allDay">
        <label for="event-end-time">End Time:</label>
        <select name="event-end-time" type="select" v-model="store.newEvent.endTimeStr">
          <option v-for="time in timeOptions" :value="time.value" :key="time.value">
            {{ time.display }}
          </option>
        </select>
      </div>
    </div>
  </MyModal>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/eventStore'
import MyModal from '../../MyModal/MyModal.vue'
import { timeOptions } from '@/components/EventCalendar/event-utils'

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
