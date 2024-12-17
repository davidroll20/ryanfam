<template>
  <div class="event-calendar">
    <button class="event-calendar__sidebar-control" @click="toggleSidebar">
      {{ showSidebar ? '>>' : '<<' }}
    </button>
    <div class="event-calendar__sidebar" v-if="showSidebar">
      <button @click="toggleInstructions">
        {{ showInstructions ? 'Hide Help' : 'Show Help' }}
      </button>
      <div class="event-calendar__sidebar-section" v-if="showInstructions">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <!-- <div class="demo-app-sidebar-section">
        <label>
          <input
            type="checkbox"
            :checked="calendarOptions.weekends"
            @change="handleWeekendsToggle"
          />
          toggle weekends
        </label>
      </div> -->
      <div class="event-calendar__sidebar-section">
        <h2>Upcoming ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for="event in currentEvents" :key="event.id">
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
            <button class="show-more" @click="toggleInfo(event.id)">
              <unicon
                name="info-circle"
                fill="var(--ryan-fam-blue)"
                v-if="!showInfo[event.id]"
              ></unicon>
              <unicon
                name="angle-up"
                fill="var(--ryan-fam-blue)"
                v-if="showInfo[event.id]"
              ></unicon>
            </button>
            <p v-show="showInfo[event.id]">
              {{ event.extendedProps.description || 'No description to show' }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="event-calendar__main">
      <FullCalendar ref="calendar" class="event-calendar__calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/core'
// import { INITIAL_EVENTS } from './event-utils'
import { onMounted, ref, type Ref } from 'vue'
import { useEventStore } from '@/stores/eventStore'

const eventStore = useEventStore()

const calendar = ref<InstanceType<typeof FullCalendar>>()

onMounted(() => {
  eventStore.calendarRef = calendar.value
})

const currentEvents: Ref<EventApi[]> = ref([])
const showSidebar = ref(true)
const showInstructions = ref(false)
const showInfo: Ref<{ [key: string]: boolean }> = ref({})

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}
const toggleInstructions = () => {
  showInstructions.value = !showInstructions.value
}

const handleDateSelect = (selectInfo: DateSelectArg) => {
  eventStore.calendarApi.unselect() // clear date selection
  eventStore.initializeNewEvent(selectInfo)
  eventStore.openModalNew('Create a new event')
}
const handleEventClick = (clickInfo) => {
  console.log('clickIfno is', clickInfo)
  eventStore.openModalEdit(clickInfo.event.title, clickInfo.event)
  // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //   clickInfo.event.remove()
  // }
}
const handleEvents = (events: EventApi[]) => {
  currentEvents.value = [...events]
  currentEvents.value.sort((a, b) => (a.startStr > b.startStr ? 1 : -1))
}

const toggleInfo = (eventId: string) => {
  console.log('click!', eventId)
  showInfo.value[eventId] = showInfo.value[eventId] === undefined ? true : !showInfo.value[eventId]
  console.log('showInfo', showInfo)
}

const calendarOptions: CalendarOptions = {
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  },
  initialView: 'dayGridMonth',
  initialEvents: eventStore.initialEvents, // alternatively, use the `events` setting to fetch from a feed
  contentHeight: 600,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
}
</script>

<style lang="scss">
@use '/src/style/vars' as *;

h2 {
  margin: 0;
  font-size: 1.5rem;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.event-calendar {
  display: flex;
  min-height: 100%;
  font-family:
    Arial,
    Helvetica Neue,
    Helvetica,
    sans-serif;
  font-size: 14px;
  flex-grow: 3;

  &__sidebar-control {
    width: 2rem;
    background: transparent;
    color: var(--ryan-fam-green);
    border: 1px solid var(--ryan-fam-green);
  }
  &__sidebar {
    width: 300px;
    line-height: 1.5;
    background: var(--background-dark);
    border-right: 1px solid #d3e2e8;
  }
  &__sidebar-section {
    padding: 1rem;
  }
  &__main {
    flex-grow: 1;
    padding: 2rem;
  }
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.fc-view-harness {
  width: 600px;
}

.show-more {
  background-color: transparent;
  border-radius: 16px;
  border: none;
  margin-left: var(--space-sm);
  height: 1.25rem;
  padding: 0;

  &:hover {
    background-color: var(--ryan-fam-green);

    svg {
      fill: black;
    }
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
