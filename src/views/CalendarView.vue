<template>
  <div class="calendar-view">
    <NewEventModal />
    <EditEventModal />
    <EventCalendar />
  </div>
</template>

<script setup lang="ts">
import NewEventModal from '@/components/EventModals/NewEventModal/NewEventModal.vue'
import EditEventModal from '@/components/EventModals/EditEventModal/EditEventModal.vue'
import EventCalendar from '@/components/EventCalendar/EventCal.vue'
</script>

<style>
.calendar-view {
  display: flex;
  align-items: center;
}
</style>
