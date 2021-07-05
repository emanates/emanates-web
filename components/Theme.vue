<template>
  <div class="theme__container">
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
  mounted() {
    this.restoreTheme()
  },
}
</script>

<style lang="scss" scoped>
.theme__container {
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