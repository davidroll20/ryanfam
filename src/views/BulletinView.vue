<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="bulletin-view">
      <h1>Bulletin will be here!</h1>
      <div class="bulletin-view__cards">
        <BulletinCard
          class="bulletin-view__card"
          v-for="num in repeat"
          :key="num"
          id="test-id"
          title="Test Bulletin"
          body="Lorem ipsum dolor sit amet klaatu barata nikto seria fatel sifii"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BulletinCard from '@/components/BulletinCard/BulletinCard.vue';

const repeat = [1, 2, 3];

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<style lang="scss" scoped>
.bulletin-view {
  &__cards {
    display: grid;
    gap: 8px;
  }
}
</style>
