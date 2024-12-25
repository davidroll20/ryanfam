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
      <div class="event-modal__control">
        <label for="event-title" class="event-modal__control--label">Title:</label>
        <input
          name="event-title"
          class="event-modal__control--input"
          v-model="store.newEvent.title"
        />
      </div>
      <div class="event-modal__control">
        <label for="event-description" class="event-modal__control--label">Description:</label>
        <textarea
          name="event-description"
          class="event-modal__control--input"
          v-model="store.newEvent.description"
        />
      </div>
      <div class="event-modal__control">
        <label for="event-all-day" class="event-modal__control--label">Is this all day?</label>
        <input
          name="event-all-day"
          type="checkbox"
          class="event-modal__control--input"
          v-model="store.newEvent.allDay"
        />
      </div>
      <div class="event-modal__control">
        <label for="event-start-date" class="event-modal__control--label">Start Date:</label>
        <input
          name="event-start-date"
          type="date"
          class="event-modal__control--input"
          v-model="store.newEvent.startDateStr"
        />
      </div>
      <div class="event-modal__control" v-if="!store.newEvent.allDay">
        <label for="event-start-time" class="event-modal__control--label">Start Time:</label>
        <select
          name="event-start-time"
          type="select"
          class="event-modal__control--input"
          v-model="store.newEvent.startTimeStr"
        >
          <option v-for="time in timeOptions" :value="time.value" :key="time.display">
            {{ time.display }}
          </option>
        </select>
      </div>
      <div class="event-modal__control">
        <label for="event-end" class="event-modal__control--label">End:</label>
        <input name="event-end" type="date" v-model="store.newEvent.endDateStr" />
      </div>
      <div class="event-modal__control" v-if="!store.newEvent.allDay">
        <label for="event-end-time" class="event-modal__control--label">End Time:</label>
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
import { useEventStore } from '@/stores/eventStore';
import MyModal from '../../MyModal/MyModal.vue';
import { timeOptions } from '@/components/EventCalendar/event-utils';

const store = useEventStore();

const createAndClose = () => {
  store.finalizeAndAddNewEvent();
  store.closeModalNew();
};
</script>

<style scoped lang="scss">
// @use '@/common/scss/mixins' as *;
@use '/src/style/vars' as *;
.event-modal {
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
      height: 6rem;
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
