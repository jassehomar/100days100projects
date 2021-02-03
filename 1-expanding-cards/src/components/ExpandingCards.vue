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
        title: "Full Stack Developer",
        url:
          "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=largesrgb&h=1281&w=1920",
      },
      {
        id: 2,
        title: "Brainstorming ",
        url:
          "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=largesrgb&h=750&w=1260",
      },
      {
        id: 3,
        title: "Team Collaboration",
        url:
          "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=largesrgb&h=750&w=1260",
      },
      {
        id: 4,
        title: "Hacker",
        url:
          "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=largesrgb&h=1279&w=1920",
      },

      {
        id: 5,
        title: "Pair Programming",
        url:
          "https://images.pexels.com/photos/1181471/pexels-photo-1181471.jpeg?auto=compress&cs=largesrgb&h=1281&w=1920",
      },
    ]);

    return { images, activeCard };
  },
};
</script>

<style>
</style>