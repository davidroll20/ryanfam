<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderMessage from './components/HeaderMessage.vue'
</script>

<template>
  <!-- <div class="app"> -->
  <header>
    <img alt="Ryan Family Crest" class="logo" src="@/assets/crest.png" width="125" height="125" />

    <div class="wrapper">
      <HeaderMessage msg="Ryan Fam" />

      <nav>
        <RouterLink to="/">Bulletin</RouterLink>
        <RouterLink to="/calendar">Calendar</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <!-- </div> -->
</template>

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
}

nav a.router-link-exact-active {
  color: var(--link-active);
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
