<template>
  <!-- <div class="app"> -->
  <header class="app-header">
    <div class="app-header__wrapper">
      <img alt="Ryan Family Crest" class="logo" src="@/assets/crest.png" width="125" height="125" />

      <div class="app-header__text-wrapper">
        <HeaderMessage msg="Ryan Fam" />
      </div>
      <!-- <div class="app-header__nav-wrapper">
        <nav>
          <RouterLink to="/bulletin">Bulletin</RouterLink>
          <RouterLink to="/calendar">Calendar</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div> -->
    </div>
    <div class="app-header__nav-wrapper">
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
import { RouterLink, RouterView } from 'vue-router';
import HeaderMessage from './components/HeaderMessage.vue';
</script>

<style lang="scss" scoped>
@use '/src/style/vars' as *;

.app-header {
  line-height: 1.5;
  // max-height: 100vh;
  width: 100%;
  border-radius: 8px;
  background-image: url('./assets/cliffs.jpg');
  background-position: center;
  background-size: cover;

  &__wrapper {
    width: 300px;
    white-space: nowrap;
    margin: var(--space-xl) auto;
    background-color: var(--background-dark-translucent);
    padding: var(--space-lg);
    border-radius: 16px;
  }

  &__nav-wrapper {
    width: 100%;
    white-space: nowrap;
    margin: 0;
    background-color: var(--background-dark-translucent);
    padding: var(--space-lg);
  }
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

main {
  max-width: 1280px;
  margin: auto;
  margin-top: var(--space-lg);
}

nav {
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  // margin-top: 2rem;

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
