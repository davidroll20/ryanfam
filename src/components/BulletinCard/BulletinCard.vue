<template>
  <div class="bulletin-card" @click="goToBulletin()">
    <RouterLink :to="route">
      <h1 class="bulletin-card__title">{{ props.title }}</h1>
    </RouterLink>
    <p class="bulletin-card__body">{{ props.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

type BulletinCardProps = {
  id: string;
  title: string;
  body: string;
};

const props = defineProps<BulletinCardProps>();

const route = computed(() => `/bulletin/${props.id}`);

const goToBulletin = () => {};
</script>

<style lang="scss" scoped>
@use '/src/style/vars' as *;

.bulletin-card {
  border: 1px solid var(--ryan-fam-blue);
  border-radius: 8px;
  padding: 8px;
  width: 200px;
  height: 250px;
  background-color: grey; //todo var
  &__title {
    font-size: 24px;
  }
  &__body {
    font-size: 16px;
  }
}
</style>
