<template>
  <div class="simple-login">
    <h1 class="simple-login__message">Please enter the Ryan Fam password below:</h1>
    <div class="simple-login__password">
      <div class="simple-login__filler"></div>
      <input
        type="password"
        v-model="store.pw"
        v-if="!store.strike && !store.showInput"
        @keyup.enter="store.proxyVerify()"
      />
      <input
        type="text"
        v-model="store.pw"
        v-if="!store.strike && store.showInput"
        @keyup.enter="store.proxyVerify()"
      />
      <button v-if="!store.strike" class="simple-login__show" @click="store.toggleShowInput()">
        <unicon name="eye" fill="var(--ryan-fam-blue)" height="24px" width="24px"></unicon>
      </button>
    </div>

    <span v-if="store.strike">Try again in a moment.</span>
    <button @click="store.proxyVerify()" class="simple-login__submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/loginStore';

const store = useLoginStore();
</script>

<style lang="scss">
@use '/src/style/vars' as *;

.simple-login {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__message {
    text-align: center;
  }

  &__filler {
    width: 32px;
  }

  &__password {
    display: flex;
    margin-bottom: var(--space-md);
    border-radius: 4px;
  }

  &__show {
    background: none;
    border: none;

    &:hover {
      svg {
        fill: var(--ryan-fam-green);
      }
    }
  }

  &__submit {
    background-color: var(--button-dark);
    padding: var(--space-sm);
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid var(--button-dark);
    color: var(--ryan-fam-blue);

    &:hover {
      color: var(--ryan-fam-green);
      border: 1px solid var(--ryan-fam-green);
    }
  }
}
</style>
