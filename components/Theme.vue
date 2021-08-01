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
            :name="getCurrentThemeIcon"
            :fill="
              $store.state.theme.currentExactTheme == 'dark' ? 'white' : 'black'
            "
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
            md:left-0
            md:right-auto
            right-0
            rounded-md
            border
            dark:border-gray-800
            shadow-lg
            bg-white
            dark:bg-darklow
            py-2
            px-5
            text-gray-600
            dark:text-gray-400
            md:origin-top-left
            origin-top-right
          "
        >
          <div class="options">
            <button
              :class="
                $store.state.theme.currentTheme == 'light' ? 'active' : ''
              "
              title="Enable light theme"
              aria-label="Enable light theme"
              @click="setThemeWrapper('light')"
            >
              Light
            </button>
            <button
              :class="$store.state.theme.currentTheme == 'dark' ? 'active' : ''"
              title="Enable dark theme"
              aria-label="Enable dark theme"
              @click="setThemeWrapper('dark')"
            >
              Dark
            </button>
            <button
              :class="$store.state.theme.currentTheme == 'auto' ? 'active' : ''"
              title="Sync theme with device"
              aria-label="Sync theme with device"
              @click="setThemeWrapper('auto')"
            >
              Auto
            </button>
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
      themeNameToIconMap: {
        light: 'brightness',
        dark: 'moon',
        auto: 'mountains-sun',
      },
    }
  },
  computed: {
    getCurrentThemeIcon() {
      /**
       * Return the name of the icon based on the
       * current theme
       */
      return this.themeNameToIconMap[this.$store.state.theme.currentTheme]
    },
  },
  mounted() {
    this.restoreTheme()
  },
  methods: {
    setThemeWrapper(value) {
      // Set the theme
      this.setTheme(value)

      // Hide the menu
      this.showThemeMenu = false
    },
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

        &.active {
          @apply text-green-500;
        }
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