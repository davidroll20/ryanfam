<template>
  <div class="calendar-view">
    <EventCalendar />
  </div>
</template>

<script setup lang="ts">
import EventCalendar from '@/components/EventCalendar/EventCal.vue'
</script>

<style>
.calendar-view {
  display: flex;
  align-items: center;
}
</style>
