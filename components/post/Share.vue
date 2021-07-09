<template>
  <div class="share__container">
    <div class="share--content font-normal">
      <button type="button" title="Share" aria-label="Share" class="share--btn">
        <client-only>
          <unicon name="upload-alt" fill="black" hover-fill="#34D399" />
        </client-only>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Share',
}
</script>