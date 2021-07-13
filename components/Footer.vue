<template>
  <div class="footer__container border-t dark:border-gray-700">
    <div
      class="
        footer--content
        md:w-3/4
        w-11/12
        mr-auto
        ml-auto
        py-6
        flex
        text-gray-500
        justify-center
      "
    >
      <div class="powered-by">
        Powered by
        <a
          href="https://emanat.es"
          class="text-gray-700 dark:text-gray-300 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
          >Emanates</a
        >
      </div>
      <div
        class="separator border-l border-gray-700 dark:border-gray-500 mx-8"
      ></div>
      <a
        href="https://github.com/emanates/emanates-web"
        class="github flex items-center text-gray-700 dark:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p class="text">We're Open Source</p>
        <client-only>
          <client-only>
            <unicon
              name="github"
              :fill="
                $store.state.theme.currentExactTheme == 'dark'
                  ? 'white'
                  : 'black'
              "
              class="ml-3"
              hover-fill="#34D399"
            />
          </client-only>
        </client-only>
      </a>
    </div>
  </div>
</template>

<script>
import { theme } from '@/mixins/theme'

export default {
  mixins: [theme],
}
</script>