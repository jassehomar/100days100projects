<template>
  <footer class="py-4 mt-3 text-center text-gray-500 text-sm">
    <p class="text-gray-600 flex items-end justify-center">
      <span
        >&copy; {{ new Date().getFullYear() }} By Omar Jasseh. Made with</span
      >
      <svg
        class="w-6 h-6 text-red-500 mx-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
      <a href="https://v3.vuejs.org/" target="_blank">using Vue</a>
      &nbsp;&amp;&nbsp;
      <a href="https://tailwindcss.com" target="_blank">Tailwind</a>
    </p>
    <p class="mt-1 text-sm">
      Inspired By Brad Traversey &amp; Florin Pop's
      <a href="https://github.com/bradtraversy/50projects50days"
        >50projects50days Course &amp; Github Project</a
      >
    </p>
    <p class="space-x-2">
      <a href="https://github.com/jassehomar" target="_blank"
        >View project on
        <font-awesome-icon :icon="github" class="text-base" />.</a
      >

      <a href="https://twitter.com/jassehomar99" target="_blank"
        >Follow Me
        <font-awesome-icon :icon="twitter" class="text-blue-400 text-base"
      /></a>
    </p>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      twitter: faTwitter,
      github: faGithub,
    };
  },
};
</script>

<style>
</style>