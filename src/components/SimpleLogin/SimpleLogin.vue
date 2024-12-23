<template>
  <div class="simple-login">
    <h1 class="login-message">Please enter the ryanfam password below.</h1>
    <input type="password" class="login-password" v-model="store.pw" v-if="!store.strike" />
    <span v-if="store.strike">Try again in a moment.</span>
    <button @click="store.proxyVerify()">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/loginStore';

const store = useLoginStore();
</script>

<style lang="scss" scoped>
@use '/src/style/vars' as *;
</style>
