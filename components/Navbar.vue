<template>
  <div class="navbar">
    <div
      class="
        bg-white
        dark:bg-gray-900
        py-2
        w-full
        border-b border-gray-300
        dark:border-gray-700
      "
    >
      <div class="navbar--content w-3/4 mr-auto ml-auto">
        <div class="brand">
          <h1 class="font-bold text-lg dark:text-white">Blog</h1>
          <a
            href="https://github.com/emanates/emanates-web"
            rel="noopener noreferer"
            target="_blank"
            class="text-sm text-gray-500 font-medium"
            >Powered by <span class="text-green-500">Emanates</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>