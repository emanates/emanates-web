<template>
  <div class="footer__container border-t dark:border-gray-700">
    <div
      class="
        footer--content
        md:w-5/6
        w-11/12
        mr-auto
        ml-auto
        items-center
        py-6
        flex flex-wrap-reverse
        md:justify-between
        justify-center
      "
    >
      <div
        class="powered-by md:w-1/2 w-full md:text-left text-center md:mt-0 mt-4"
      >
        <span class="text-gray-600 dark:text-gray-400 md:inline-block block"
          >Powered by</span
        >
        <a
          href="https://emanates.deepjyoti30.dev"
          class="text-black dark:text-white font-semibold"
          target="_blank"
          rel="noopener noreferrer"
          >Emanates</a
        >
      </div>
      <div class="links text-center">
        <a
          href="https://github.com/emanates/emanates-web"
          class="github flex items-center text-gray-600 dark:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text md:font-normal font-medium">We're Open Source</p>
          <div class="github--icon--wrapper md:block hidden mt-1">
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
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { theme } from '@/mixins/theme'

export default {
  mixins: [theme],
}
</script>