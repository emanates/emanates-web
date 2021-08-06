<template>
  <div class="navbar">
    <div
      class="
        bg-white
        dark:bg-darklow
        dark:text-white
        md:py-2
        py-4
        w-full
        border-b border-gray-300
        dark:border-gray-700
      "
    >
      <div
        class="
          navbar--content
          md:w-3/4
          w-11/12
          mr-auto
          ml-auto
          flex
          justify-between
          items-center
        "
      >
        <div class="brand">
          <router-link to="/" class="font-bold md:text-lg text-xl">{{
            getBlogName
          }}</router-link>
          <a
            href="https://github.com/emanates/emanates-web"
            rel="noopener noreferer"
            target="_blank"
            class="text-sm text-gray-500 font-medium md:block hidden"
            >Powered by <span class="text-green-500">Emanates</span></a
          >
        </div>
        <div class="right--content flex items-center">
          <div class="links--content md:block hidden">
            <router-link to="/" class="link">Posts</router-link>
          </div>
          <div
            class="
              md:block
              hidden
              separator
              border-l
              py-4
              border-gray-700
              dark:border-gray-600
              mx-6
            "
          ></div>
          <div class="icons--content flex">
            <Theme />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from './Theme.vue'
import config from '~/.emanates.js'
export default {
  components: { Theme },
  computed: {
    getBlogName() {
      return config.name
    },
  },
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