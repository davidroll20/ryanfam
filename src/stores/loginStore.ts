import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import {
  getAuth,
  createUserWithEmailAndPassword,
  type User,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const useLoginStore = defineStore('login', () => {
  const pw = ref('');
  const email = ref('');
  const pwAccepted = ref(false);
  const strike = ref(false);
  const pwInvalid = ref(false);
  const emailInvalid = ref(false);
  const showInput = ref(false);
  const errorMessage = ref('');
  const user: Ref<User | undefined> = ref();

  const isSignedIn = computed(() => {
    // return true;
    return user.value !== undefined;
  });

  const validatePw = () => {
    if (
      pw.value.length > 6 &&
      (pw.value.includes('!') ||
        pw.value.includes('@') ||
        pw.value.includes('#') ||
        pw.value.includes('$') ||
        pw.value.includes('%') ||
        pw.value.includes('^') ||
        pw.value.includes('&') ||
        pw.value.includes('*') ||
        pw.value.includes('(') ||
        pw.value.includes(')') ||
        pw.value.includes('-') ||
        pw.value.includes('+'))
    ) {
      pwInvalid.value = false;
      errorMessage.value = '';
      return true;
    } else {
      pwInvalid.value = true;
      errorMessage.value =
        'Your password must be longer than 6 characters and include one of the following special characters: !@#$%^&*()_+.';
      return false;
    }
  };

  const validateEmail = () => {
    const at = email.value.indexOf('@');
    if (at > 0 && at !== email.value.length - 1) {
      emailInvalid.value = false;
      errorMessage.value = '';
      return true;
    } else {
      emailInvalid.value = true;
      errorMessage.value = 'You must enter a valid email address.';
      return false;
    }
  };

  const emailCreate = () => {
    if (!validateEmail() || !validatePw()) {
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, pw.value)
      .then((userCredential) => {
        // Signed up
        user.value = userCredential.user;
        errorMessage.value = '';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        errorMessage.value = `Sign-up failed: ${errorCode}: ${errorMsg}`;
        // ..
      });
  };

  const emailSignin = () => {
    if (!validateEmail() || !validatePw()) {
      return;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, pw.value)
      .then((userCredential) => {
        // Signed in
        user.value = userCredential.user;
        errorMessage.value = '';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        errorMessage.value = `Login failed: ${errorCode}: ${errorMsg}`;
      });
  };

  const proxyVerify = () => {
    verifyPW();
  };

  const toggleShowInput = () => {
    showInput.value = !showInput.value;
  };

  const verifyPW = () => {
    if (strike.value) return;
    const shifted = Number(pw.value) << Number(pw.value[2]);
    const shiftedStr = shifted.toString();
    if (
      Number(shiftedStr[0]) -
        Number(shiftedStr[1]) *
          (Number(shiftedStr[2]) + Number(shiftedStr[3])) *
          Math.sqrt(Number(shiftedStr[4])) ===
        -11 &&
      Number(
        (
          ((Number(pw.value[1]) + Number(shiftedStr[0])) *
            Number(shiftedStr[2]) *
            Number(pw.value[2])) /
          Number(shiftedStr[2] + shiftedStr[4])
        )
          .toString()
          .substring(0, 4),
      ) === 2.27
    ) {
      pwAccepted.value = true;
    } else {
      strike.value = true;
      setTimeout(function () {
        strike.value = false;
      }, 3000);
    }
  };

  return {
    pw,
    email,
    pwInvalid,
    emailInvalid,
    isSignedIn,
    errorMessage,
    emailCreate,
    emailSignin,
    proxyVerify,
    pwAccepted,
    strike,
    showInput,
    toggleShowInput,
  };
});
