<template>
  <div class="calendar-view">
    <NewEventModal v-if="store.modalNew.show" />
    <EditEventModal v-if="store.modalEdit.show" />
    <EventCalendar />
  </div>
</template>

<script setup lang="ts">
import NewEventModal from '@/components/EventModals/NewEventModal/NewEventModal.vue';
import EditEventModal from '@/components/EventModals/EditEventModal/EditEventModal.vue';
import EventCalendar from '@/components/EventCalendar/EventCal.vue';
import { useEventStore } from '@/stores/eventStore';

const store = useEventStore();
</script>

<style>
.calendar-view {
  display: flex;
  align-items: center;
}
</style>
