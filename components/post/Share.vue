<template>
  <div class="share__container">
    <div class="share--content font-normal">
      <button
        type="button"
        title="Share"
        aria-label="Share"
        class="share--btn"
        @click="showShare"
      >
        <client-only>
          <unicon
            name="upload-alt"
            :fill="
              $store.state.theme.currentExactTheme == 'dark' ? 'white' : 'black'
            "
            hover-fill="#34D399"
          />
        </client-only>
      </button>
      <share-popup ref="sharePopup" :post="post" />
    </div>
  </div>
</template>

<script>
import SharePopup from '@/components/post/SharePopup.vue'

export default {
  name: 'Share',
  components: { SharePopup },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  methods: {
    showShare() {
      /**
       * Show the popup modal for the user to share the
       * post.
       */
      this.$refs.sharePopup.$refs.popupModal.showModal()
    },
  },
}
</script>