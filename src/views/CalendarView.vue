<template>
  <div v-if="!loginStore.pwAccepted">
    <SimpleLogin></SimpleLogin>
  </div>
  <div class="calendar-view" v-else>
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
import SimpleLogin from '@/components/SimpleLogin/SimpleLogin.vue';
import { useLoginStore } from '@/stores/loginStore';

const store = useEventStore();
const loginStore = useLoginStore();
</script>

<style>
.calendar-view {
  display: flex;
  align-items: center;
}
</style>
