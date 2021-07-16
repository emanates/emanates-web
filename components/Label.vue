<template>
  <div class="label__container">
    <div
      class="
        label
        py-1
        px-5
        font-semibold
        text-sm
        inline-flex
        rounded-2xl
        uppercase
      "
      :style="`background-color: #${getColorForLabel(
        label.color
      )}; color: ${determineFgColor(label.color)}`"
    >
      {{ label.name }}
    </div>
  </div>
</template>

<script>
import { labels } from '@/mixins/labels'

export default {
  name: 'Label',
  mixins: [labels],
  props: {
    label: {
      type: Object,
      require: true,
      default: null,
    },
  },
  methods: {
    getColorForLabel(githubColorCode) {
      /**
       * Get the color code mapping for the label as
       * returned by GitHub.
       */
      return this.getColor(githubColorCode)
    },
  },
}
</script>