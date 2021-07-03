<template>
  <div class="header__container">
    <div
      class="
        header--content
        font-merriweather
        md:w-3/4
        w-11/12
        mr-auto
        ml-auto
        text-center
        md:py-24
        py-12
      "
    >
      <h1
        class="
          xl:text-7xl
          md:text-6xl
          text-4xl
          xl:leading-relaxed
          md:leading-relaxed
          leading-normal
          font-black
          dark:text-white
        "
      >
        Writing is an <b>Art</b>. <br />
        I am an <b>Artist</b>.
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__container {
  .header--content {
    b {
      @apply text-green-400;
    }
  }
}
</style>