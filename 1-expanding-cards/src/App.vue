<template>
  <div class="flex min-h-screen flex-col items-center py-3 sm:py-6 bg-gray-50">
    <h1 class="text-2xl uppercase text-indigo-500 my-3 underline font-bold">
      100 Days or Less - 100 Projects
    </h1>

    <h2 class="text-lg text-gray-700 mb-5">
      Day 1 Project 1 - Expanding Cards in Vue 3
    </h2>

    <ExpandingCards />

    <FooterSection />
  </div>
</template>

<script >
import ExpandingCards from "./components/ExpandingCards.vue";
import FooterSection from "./components/Footer.vue";
export default {
  components: { ExpandingCards, FooterSection },
};
</script>

<style>
</style>