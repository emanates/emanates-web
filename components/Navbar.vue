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
          <div
            class="theme mt-2 relative"
            @mouseover="showThemeMenu = true"
            @mouseleave="showThemeMenu = false"
          >
            <button title="Change Theme" aria-label="Change Theme">
              <client-only>
                <unicon
                  name="brightness"
                  :fill="isDeviceDarkTheme() ? 'white' : 'black'"
                  hover-fill="#34D399"
                />
              </client-only>
            </button>
            <transition name="theme-show">
              <div
                v-if="showThemeMenu"
                class="
                  theme--options
                  absolute
                  top-0
                  left-0
                  rounded-md
                  border
                  shadow-lg
                  bg-white
                  py-2
                  px-5
                  text-gray-600
                  origin-top-left
                "
              >
                <div class="options">
                  <button>Light</button>
                  <button>Dark</button>
                  <button>Auto</button>
                </div>
              </div>
            </transition>
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
  data() {
    return {
      showThemeMenu: false,
    }
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

  .theme--options {
    .options {
      button {
        display: block;

        @apply p-1 hover:text-green-500 transition ease-in duration-100 font-medium;
      }
    }
  }

  .theme-show-enter,
  .theme-show-leave-to {
    transform: scale(0.5);
    transform-origin: left center;
  }

  .theme-show-enter-to,
  .theme-show-leave {
    transform: scale(1);
  }

  .theme-show-enter-active {
    transition: transform 70ms;
  }
}
</style>