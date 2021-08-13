<template>
  <div
    class="
      md:w-full
      w-11/12
      mr-auto
      ml-auto
      comments__container
      mt-18
      md:mb-18
      mb-14
    "
  >
    <div class="top--text border-t border-grey-16 w-full relative">
      <div
        class="
          text--content
          inline-block
          absolute
          mr-auto
          ml-auto
          left-0
          right-0
          text-13
          bg-white
          text-grey-47
        "
      >
        <div class="wrapper text-center text-xl font-semibold text-gray-700">
          Comments
        </div>
      </div>
    </div>
    <div class="comments--content mt-8">
      <script
        src="https://utteranc.es/client.js"
        repo="deepjyoti30/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.comments__container {
  .top--text {
    .text--content {
      width: 127px;
      top: -15px;
    }
  }
}
</style>