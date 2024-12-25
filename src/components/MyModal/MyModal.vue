<template>
  <dialog :id="dialogID" ref="dialog" class="my-modal" @click.prevent="clickAway">
    <div class="my-modal__inner">
      <div class="my-modal__header">
        <h2>{{ title }}</h2>
        <button v-if="showClose" class="my-modal__close" @click="closeModal">
          <span class="sr-only">Close</span>
          <unicon name="times" fill="white"></unicon>
        </button>
      </div>
      <div :class="contentClasses">
        <slot />
      </div>
      <template v-if="$slots.footer">
        <div class="my-modal__footer">
          <slot name="footer" />
        </div>
      </template>
      <div
        v-else-if="showDelete || showDiscard || showSave"
        class="my-modal__footer my-modal__footer--buttons"
      >
        <button v-if="showDelete" class="my-modal__delete" @click="deleteItem">Delete</button>
        <button v-if="showDiscard" class="my-modal__discard" @click="discardChanges">
          Discard Changes
        </button>
        <button v-if="showSave" class="my-modal__save" @click="saveChanges">Save</button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

type MyModalProps = {
  open?: boolean;
  showClose?: boolean;
  showSave?: boolean;
  showDelete?: boolean;
  showDiscard?: boolean;
  disableScroll?: boolean;
  title: string;
  onSave?: () => void;
  onDelete?: () => void;
  onDiscard?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
};

const props = defineProps<MyModalProps>();
const emit = defineEmits([`close`]);

// Refs

const dialog = ref<HTMLDialogElement | null>(null);
const dialogID = computed(() => `dialog-${props.title}`);

// Opening and Closing the Modal

const openModal = () => {
  if (dialog.value) {
    dialog.value.showModal();
  }
  if (props.onOpen) {
    props.onOpen();
  }
};

const closeModal = () => {
  if (dialog.value) {
    dialog.value.close();
  }
  if (props.onClose) {
    props.onClose();
  }
};

const deleteItem = () => {
  closeModal();
  if (props.onDelete) {
    props.onDelete();
  }
};

const discardChanges = () => {
  closeModal();
  if (props.onDiscard) {
    props.onDiscard();
  }
};

const saveChanges = () => {
  closeModal();
  if (props.onSave) {
    props.onSave();
  }
};

const clickAway = (e: MouseEvent) => {
  emit(`close`);
  if (e.target === dialog.value) {
    closeModal();
  }
};

onMounted(() => {
  if (props.open) {
    openModal();
  }
});

// Watchers

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      openModal();
    }
    if (!isOpen) {
      closeModal();
    }
  },
);

// Styles

const contentClasses = computed(() => ({
  'my-modal__content': true,
  'my-modal__content--disable-scroll': props.disableScroll,
}));
</script>

<style lang="scss">
@use '/src/style/mixins' as *;
.my-modal {
  margin: auto;
  min-width: 30dvw;
  width: max-content;
  max-width: 40dvw;
  max-height: 60dvh;
  height: 60dvh;
  padding: 0;

  border-radius: 1rem;
  border: none;

  background-color: var(--background-modal);
  color: var(--primary-text);
  filter: drop-shadow(0 0 0.5rem rgba(#000, 0.5));

  overflow: hidden;

  h2 {
    margin: 0;
  }

  &::backdrop {
    position: fixed;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(5px) brightness(0.5);
  }

  &__inner {
    padding: var(--space-lg);
    height: 100%;
    overflow: hidden;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content;
    gap: var(--space-md);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    border-bottom: 1px solid var(--divider-dark);

    font-family: var(--font-title);
    font-size: 12pt;
  }

  &__close {
    padding: 0.5rem;
    width: min-content;
    aspect-ratio: 1 / 1;

    border: none;
    border-radius: 50%;

    font-size: 0.75rem;

    background: var(--button-dark);

    cursor: pointer;
  }

  &__content {
    min-height: 4rem;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;

    &--disable-scroll {
      overflow-y: hidden;
    }
  }

  &__footer {
    gap: 1rem;
    padding-top: 1rem;

    border-top: 1px solid var(--divider-dark);

    &--buttons {
      display: flex;
      justify-content: flex-end;

      > * {
        flex-shrink: 1;
        flex-basis: min-content;
      }
    }
  }

  &__delete,
  &__discard,
  &__save {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    white-space: nowrap;

    font-size: 1rem;

    background: var(--button-dark);
    color: var(--primary-text);

    cursor: pointer;
  }

  &__delete {
    background: var(--button-delete);
    border: 1px solid var(--button-delete-hover);
    margin-right: auto;

    &:hover {
      background: var(--button-delete-hover);
    }
  }

  &__discard {
    background: var(--button-discard);
    border: 1px solid var(--button-discard-border);

    &:hover {
      background: var(--button-discard-hover);
      border: 1px solid var(--button-discard-border-hover);
    }
  }

  &__save {
    background: var(--button-confirm);
    &:hover {
      background: var(--button-confirm-hover);
    }
  }
}

dialog {
  animation: fadeOutDown 0.25s ease-out;
}

dialog[open] {
  animation: fadeInUp 0.25s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20dvh, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 20dvh, 0);
  }
}
</style>
