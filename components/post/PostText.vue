<template>
  <div class="post--text__container"></div>
</template>

<script>
import { markdownRenderer } from '~/mixins/markdown'

export default {
  mixins: [markdownRenderer],
}
</script>