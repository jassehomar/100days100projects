<template>
  <div
    @click="$emit('active:card', cardId)"
    class="h-screen-78 rounded-4xl cursor-pointer bg-cover bg-center bg-no-repeat relative transition-flex ease-in duration-600 delay-0 overflow-hidden"
    :class="[
      activeCard === cardId ? 'flex-5 shadow-xl' : 'flex-half shadow',
      [4, 5].includes(cardId) ? 'hidden sm:block' : '',
    ]"
    :style="`background-image: url(${image});`"
  >
    <h3
      class="text-white text-2xl font-bold transition-opacity duration-300 absolute bottom-5 left-10 delay-300 uppercase"
      :class="{ 'opacity-0': activeCard !== cardId }"
    >
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    cardId: {
      type: Number,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    activeCard: {
      type: Number,
    },
  },
};
</script>

<style>
</style>