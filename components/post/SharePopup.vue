<template>
  <div class="share--popup__container">
    <Modal
      ref="popupModal"
      modal-id="share--modal"
      heading="Share Post"
      :cross-btn="true"
    >
      <div class="share--content">
        <div class="text--content">
          <h1 class="text-xl font-bold">{{ post.title }}</h1>
          <p class="mt-2 text-base text-gray-500 font-medium">
            Share with others
          </p>
        </div>
        <div class="share--options mt-6">
          <div class="external--options flex items-center">
            <button type="button">
              <client-only>
                <unicon
                  name="twitter"
                  fill="black"
                  width="30"
                  height="30"
                  class=""
                />
              </client-only>
            </button>
            <button type="button">
              <client-only>
                <unicon
                  name="linkedin"
                  fill="black"
                  width="30"
                  height="30"
                  class=""
                />
              </client-only>
            </button>
            <button type="button">
              <client-only>
                <unicon
                  name="facebook"
                  fill="black"
                  width="30"
                  height="30"
                  class=""
                />
              </client-only>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../Modal.vue'
export default {
  components: { Modal },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.share--popup__container {
  .share--content {
    .share--options {
      .external--options {
        button {
          @apply mr-6;
        }
      }
    }
  }
}
</style>