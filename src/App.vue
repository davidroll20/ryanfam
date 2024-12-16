<template>
  <!-- <div class="app"> -->
  <header>
    <img alt="Ryan Family Crest" class="logo" src="@/assets/crest.png" width="125" height="125" />

    <div class="wrapper">
      <HeaderMessage msg="Ryan Fam" />

      <nav>
        <RouterLink to="/bulletin">Bulletin</RouterLink>
        <RouterLink to="/calendar">Calendar</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <!-- </div> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderMessage from './components/HeaderMessage.vue'
import { useEventStore } from './stores/eventStore'
import { dummyEvents } from './stores/dummyEvents'

const eventStore = useEventStore()
eventStore.hydrateEvents(dummyEvents)
</script>

<style lang="scss" scoped>
@use '/src/style/vars' as *;

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: var(--link);
    transition: 0.4s;
    padding: 3px;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &.router-link-exact-active {
      color: var(--link-active);
      text-decoration: underline;
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }

    &:first-of-type {
      border: 0;
    }

    &:hover {
      border-radius: 4px;
      color: var(--link-hover);
      background-color: var(--link-hover-background);
    }
  }
}
</style>
