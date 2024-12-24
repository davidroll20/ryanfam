<template>
  <div class="simple-login">
    <h1 class="simple-login__message">In the fam? Please log in below:</h1>
    <div class="simple-login__controls">
      <div class="simple-login__filler"></div>
      <label for="email-input">Email:</label>
      <input
        type="text"
        name="email-input"
        v-model="store.email"
        class="simple-login__input"
        v-if="!store.strike"
      />
      <label for="pw-input">Password:</label>
      <input
        type="password"
        name="pw-input"
        class="simple-login__input"
        v-model="store.pw"
        v-if="!store.strike && !store.showInput"
        @keyup.enter="store.emailSignin()"
      />
      <input
        type="text"
        name="pw-input"
        class="simple-login__input"
        v-model="store.pw"
        v-if="!store.strike && store.showInput"
        @keyup.enter="store.emailSignin()"
      />
      <button v-if="!store.strike" class="simple-login__show" @click="store.toggleShowInput()">
        <unicon name="eye" fill="var(--ryan-fam-blue)" height="24px" width="24px"></unicon>
      </button>
    </div>

    <p v-if="store.errorMessage" class="simple-login__warning">
      {{ store.errorMessage }}
    </p>
    <div>
      <button @click="store.emailSignin()" class="simple-login__submit">Login</button>
      <span> or </span>
      <button @click="store.emailCreate()" class="simple-login__submit">Sign-Up</button>
    </div>
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

  &__input {
    border-radius: 4px;
    margin: 0 var(--space-md);
  }

  &__controls {
    display: flex;
    margin: var(--space-lg);
  }

  &__warning {
    color: red;
    margin-bottom: var(--space-md);
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
