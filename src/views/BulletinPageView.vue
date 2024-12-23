<template>
  <main>
    <div v-if="!loginStore.pwAccepted">
      <SimpleLogin></SimpleLogin>
    </div>
    <div class="bulletin-page-view" v-else>
      <EditBulletinModal v-if="store.modalEdit.show" />
      <div class="bulletin-page">
        <h1>{{ bulletin.title }}</h1>
        <sub>by {{ bulletin.author }}</sub>
        <p>{{ bulletin.body }}</p>
      </div>
      <div>
        <button @click="editBulletin">Edit</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import EditBulletinModal from '@/components/BulletinModals/EditBulletinModal/EditBulletinModal.vue';
import SimpleLogin from '@/components/SimpleLogin/SimpleLogin.vue';
import { useBulletinStore } from '@/stores/bulletinStore';
import { useLoginStore } from '@/stores/loginStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const store = useBulletinStore();
const loginStore = useLoginStore();
const route = useRoute();

const bulletin = computed(() => store.getBulletinById(route.params.id as string));

const editBulletin = () => {
  store.openModalEdit(`Edit ${bulletin.value.title}`, bulletin.value);
};
</script>

<style lang="scss" scoped>
.bulletin-page-view {
  margin: 0 var(--space-xl);
}
</style>
