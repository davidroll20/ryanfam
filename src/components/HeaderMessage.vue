<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="title">{{ msg }}</h1>
    <h3>Check out the latest in Bulletin or click Calendar to see what's coming up!</h3>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/style/vars' as *;

.title {
  color: var(--ryan-fam-green);
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
