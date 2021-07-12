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
          <h1 class="text-xl dark:text-white font-bold">{{ post.title }}</h1>
          <p
            class="
              mt-2
              text-base text-gray-500
              dark:text-gray-400
              font-medium
              md:block
              hidden
            "
          >
            Share with others
          </p>
        </div>
        <div class="share--options mt-6">
          <div
            v-if="showExternalOptions"
            class="external--options flex items-center"
          >
            <a
              v-for="(value, id) in shareLinks"
              :key="id"
              :href="value.buildFunc(post)"
            >
              <client-only>
                <unicon
                  :name="value.iconName"
                  :fill="
                    $store.state.theme.currentExactTheme == 'dark'
                      ? 'white'
                      : 'black'
                  "
                  class="icon"
                />
              </client-only>
            </a>
          </div>
          <div v-else class="dark:text-white" @click="showNativeShare()">
            Share post via ...
          </div>
          <div class="copy__container text-base">
            <div class="copy--content flex flex-wrap rounded-md mt-6">
              <input
                ref="linkContent"
                type="url"
                readonly
                class="
                  select-all
                  p-2
                  text-gray-700
                  flex-grow
                  truncate
                  border
                  dark:border-gray-700
                  rounded-l-md
                  focus:outline-none
                  dark:bg-darklow
                  dark:text-gray-100
                "
                :value="getShareUrl"
                @click="selectText($event)"
              />
              <button
                type="button"
                class="
                  md:w-1/12
                  w-2/12
                  rounded-r-md
                  flex
                  justify-center
                  items-center
                  bg-gray-200
                  dark:bg-gray-800
                  text-gray-500
                  dark:text-gray-300
                  focus:outline-none
                  hover:bg-gray-300
                  dark:hover:bg-gray-700
                  transition
                  duration-100
                  ease-in
                "
                title="Copy Link"
                @click="copyLink"
              >
                <client-only>
                  <unicon
                    v-if="!isClicked"
                    name="copy"
                    :fill="
                      $store.state.theme.currentExactTheme == 'dark'
                        ? 'white'
                        : 'black'
                    "
                  />
                  <span v-else class="mt-1">
                    <unicon
                      v-if="copyStatus"
                      name="check-circle"
                      :fill="
                        $store.state.theme.currentExactTheme == 'dark'
                          ? 'white'
                          : 'black'
                      "
                    />
                    <unicon
                      v-else
                      name="exclamation-triangle"
                      :fill="
                        $store.state.theme.currentExactTheme == 'dark'
                          ? 'white'
                          : 'black'
                      "
                    />
                  </span>
                </client-only>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { share } from '@/mixins/share'
import { utils } from '@/mixins/utils'

import Modal from '../Modal.vue'

export default {
  components: { Modal },
  mixins: [share, utils],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      copyStatus: false,
      shareUrl: '',
      isClicked: false,
      shareLinks: [],
    }
  },
  computed: {
    getShareUrl() {
      return this.shareUrl
    },
    showExternalOptions() {
      /**
       * Check if to show the external options or not.
       *
       * We will hide the external options if the screen size
       * is smaller thatn 768px and native share is present.
       *
       * Else fallback to the external options.
       */
      if (!this.isClientSide()) return true

      return !(window.innerWidth <= 768 && this.isNativePresent())
    },
  },
  mounted() {
    this.shareUrl = document.location

    this.buildShareLinks()
  },
  methods: {
    selectText(el) {
      /**
       * Select the text when the input container is clicked by
       * the user.
       */
      el.currentTarget.select()
    },
    async copyLink() {
      /**
       * Copy the link to the users clipboard.
       */
      this.copyStatus = await this.copyUrl(
        this.shareUrl,
        this.$refs.linkContent
      )
      this.isClicked = true
      setTimeout(() => {
        this.isClicked = false
      }, 5000)
    },
    buildShareLinks() {
      /**
       * Build share links for different sites and return an array
       * with icon names and such
       */
      this.shareLinks = [
        {
          buildFunc: this.buildTwitterLink,
          iconName: 'twitter',
        },
        {
          buildFunc: this.buildLinkedInLink,
          iconName: 'linkedin',
        },
        {
          buildFunc: this.buildFacebookLink,
          iconName: 'facebook',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.share--popup__container {
  .share--content {
    .share--options {
      .external--options {
        a {
          @apply mr-3 px-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-100 ease-in;

          .icon {
            @apply mt-2;
          }
        }
      }
    }
  }
}
</style>