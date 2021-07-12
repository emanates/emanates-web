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
</script>Modal