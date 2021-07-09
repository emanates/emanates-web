<template>
  <div class="share--popup__container">
    <Modal
      ref="popupModal"
      modal-id="share--modal"
      heading="Share Post"
      :cross-btn="true"
    />
  </div>
</template>

<script>
import Modal from '../Modal.vue'
export default {
  components: { Modal },
}
</script>Modal