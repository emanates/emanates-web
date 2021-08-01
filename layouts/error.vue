<template>
  <div
    class="
      not-found--container
      2xl:w-2/3
      xl:w-3/4
      lg:w-3/4
      md:w-4/5
      w-11/12
      mr-auto
      ml-auto
      flex
      items-center
    "
  >
    <div class="wrapper block">
      <div class="top--generic--content dark:text-white">
        <h1 class="md:text-4xl text-3xl font-bold">
          Uh Oh! Seems like you're at the wrong place.
        </h1>
        <p class="mt-3 text-lg font-medium text-gray-700 dark:text-gray-400">
          We tried our best but couldn't find the page you're looking for!
        </p>
      </div>
      <div
        v-if="error"
        class="
          error--details
          mt-12
          flex
          text-lg
          font-semibold
          text-gray-800
          dark:text-gray-300
        "
      >
        <p>{{ error.statusCode }}</p>
        <span class="border-l-2 border-gray-500 mx-3"></span>
        <p>{{ error.message }}</p>
      </div>
      <div class="extra--message mt-8 text-gray-700 dark:text-gray-400">
        > If you think this is an error on our side,
        <a
          href="https://github.com/emanates/emanates-web/issues/new"
          target="_blank"
          rel="noreferrer noopener"
          class="text-gray-900 dark:text-gray-300 font-medium underline"
          >you can raise an issue on Emanates</a
        >!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.not-found--container {
  height: 80vh;
}
</style>