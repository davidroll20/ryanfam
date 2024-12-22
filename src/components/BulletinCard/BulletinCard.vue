<template>
  <RouterLink :to="route">
    <div class="bulletin-card">
      <h1 class="bulletin-card__title">{{ props.bulletin.title }}</h1>
      <sub>by {{ props.bulletin.author }}</sub>
      <p class="bulletin-card__body">{{ props.bulletin.body }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import type { Bulletin } from '@/stores/bulletinStore';

type BulletinCardProps = {
  bulletin: Bulletin;
};

const props = defineProps<BulletinCardProps>();

const route = computed(() => `/bulletin/${props.bulletin.id}`);
</script>

<style lang="scss">
@use '/src/style/vars' as *;

.bulletin-card {
  border: 1px solid var(--ryan-fam-blue);
  border-radius: 8px;
  padding: 8px;
  width: 200px;
  height: 200px;
  background-color: grey; //todo var
  color: var(--primary-text);
  overflow-y: hidden;

  &__title {
    font-size: 16px;
  }
  &__body {
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(120%);
    border: 1px solid var(--ryan-fam-green);
  }
}
</style>
