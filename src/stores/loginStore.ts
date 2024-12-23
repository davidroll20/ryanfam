import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', () => {
  const pw = ref('');
  const pwAccepted = ref(false);
  const strike = ref(false);

  const proxyVerify = () => {
    verifyPW();
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
    proxyVerify,
    pwAccepted,
    strike,
  };
});
