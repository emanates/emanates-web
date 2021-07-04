<template>
  <div class="footer__container border-t dark:border-gray-700">
    <div class="footer--content w-3/4 mr-auto ml-auto py-6 flex text-gray-500">
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
        class="separator border-l border-gray-700 dark:border-gray-500 mx-6"
      ></div>
      <a
        href="https://github.com/emanates/emanates-web"
        class="github flex items-center text-gray-700 dark:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p class="text">We're Open Source</p>
        <img
          :src="
            require(`@/assets/img/github-${
              isDeviceDarkTheme ? 'light' : 'dark'
            }.png`)
          "
          class="ml-3"
          width="20"
          alt="GitHub Logo"
        />
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