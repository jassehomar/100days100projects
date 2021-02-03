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
      <a href="https://v3.vuejs.org/" target="_blank">Vue</a> &nbsp;&amp;&nbsp;
      <a href="https://tailwindcss.com" target="_blank">Tailwind</a>
    </p>
    <p class="mt-1 text-sm">
      Inspired By Brad Traversey &amp; Florin Pop's
      <a href="https://github.com/bradtraversy/50projects50days"
        >50projects50days Course &amp; Github Project</a
      >
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>