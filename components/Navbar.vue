<template>
  <div class="navbar">
    <div
      class="
        bg-white
        dark:bg-black
        dark:text-white
        py-2
        w-full
        border-b border-gray-300
        dark:border-darklow
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
          <router-link to="/" class="text-lg link">Posts</router-link>
          <div
            class="
              separator
              border-l
              py-4
              border-gray-300
              dark:border-gray-600
              mx-6
            "
          ></div>
          <div class="theme mt-2">
            <button title="Change Theme" aria-label="Change Theme">
              <client-only>
                <unicon
                  name="brightness"
                  :fill="isDeviceDarkTheme() ? 'white' : 'black'"
                  hover-fill="#34D399"
                />
              </client-only>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { theme } from '~/mixins/theme'

export default {
  mixins: [theme],
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar--content {
    .right--content {
      .link {
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
</style>