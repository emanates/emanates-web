<template>
  <div class="navbar">
    <div
      class="
        bg-white
        dark:bg-darklow
        dark:text-white
        py-2
        w-full
        border-b border-gray-300
        dark:border-gray-700
      "
    >
      <div
        class="
          navbar--content
          w-3/4
          mr-auto
          ml-auto
          flex
          justify-between
          items-center
        "
      >
        <div class="brand">
          <h1 class="font-bold text-lg">Blog</h1>
          <a
            href="https://github.com/emanates/emanates-web"
            rel="noopener noreferer"
            target="_blank"
            class="text-sm text-gray-500 font-medium"
            >Powered by <span class="text-green-500">Emanates</span></a
          >
        </div>
        <div class="right--content flex items-center">
          <div class="links--content">
            <router-link to="/" class="link">Posts</router-link>
          </div>
          <div
            class="
              separator
              border-l
              py-4
              border-gray-700
              dark:border-gray-600
              mx-6
            "
          ></div>
          <theme />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from './Theme.vue'
export default {
  components: { Theme },
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar--content {
    .right--content {
      .links--content {
        .link {
          @apply text-xl font-medium;

          transition: 0.2s ease;
          &:hover {
            @apply text-green-400;
          }

          &.nuxt-link-exact-active {
            @apply text-green-400;
          }
        }
      }
    }
  }
}
</style>