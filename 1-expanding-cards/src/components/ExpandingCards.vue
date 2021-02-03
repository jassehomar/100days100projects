<template>
  <div class="container flex mx-auto space-x-8 my-auto">
    <Card
      @active:card="(cardId) => (activeCard = cardId)"
      v-for="image in images"
      :key="image.id"
      :card-id="image.id"
      :title="image.title"
      :image="image.url"
      :active-card="activeCard"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { ref } from "vue";
export default {
  components: { Card },
  setup() {
    const activeCard = ref(1);
    const images = ref([
      {
        id: 1,
        title: "Pair Programming",
        url: "src/assets/images/pair-programming.jpg",
      },
      {
        id: 2,
        title: "Thinking ",
        url: "src/assets/images/thinking.jpg",
      },
      {
        id: 3,
        title: "Team Collaboration",
        url: "src/assets/images/team-collaboration.jpg",
      },
      {
        id: 4,
        title: "Focus Mode",
        url: "src/assets/images/focus-mode.jpg",
      },
      {
        id: 5,
        title: "Full Stack Developer",
        url: "src/assets/images/fullstack-developer.jpg",
      },
    ]);

    return { images, activeCard };
  },
};
</script>

<style>
</style>