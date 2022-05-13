<template>
  <div class="">
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="m-14">
        <h1 class="font-qs text-gray-800 font-semibold text-5xl text-center">
          Text Formatter
        </h1>
      </div>
      <div>
        <div>
          <textarea
            v-model="customText"
            :wrap="WrapLines ? 'soft' : 'off'"
            cols="120"
            rows="10"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none mb-4 font-qs"
            placeholder="Your text..."
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <select
              id="mode"
              v-model="selected"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-qs text-base"
            >
              <option disabled :value="0">Select an option</option>
              <option :value="1">Uppercase all</option>
              <option :value="2">Lowercase all</option>
              <option :value="3">Capitalize sentence</option>
              <option :value="4">Capitalize words</option>
            </select>
            <button
              :disabled="selected == '0' ? true : false"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 flex gap-2 justify-center items-center"
              @click="Format"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                />
              </svg>
              <span>Format</span>
            </button>
          </div>
          <div class="flex gap-1">
            <button
              type="button"
              class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
              @click="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>

            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-lg font-medium px-5 py-2.5 text-center font-qs flex justify-center items-center gap-2 text-base"
              @click="CopyToClipboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  v-if="!isCopied"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span>{{ isCopied ? 'Copied' : 'Copy to clipboard' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <About />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import About from '~/components/About.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    About,
  },

  data() {
    return {
      customText: '',
      selected: 0,
      WrapLines: true,
      isCopied: false,
    }
  },

  methods: {
    Format() {
      switch (this.selected) {
        case 1:
          this.ToUpperCaseAll()
          break
        case 2:
          this.ToLowerCaseAll()
          break
        case 3:
          this.ToCapitalizeSentence()
          break
        case 4:
          this.ToCapitalizeWords()
          break
      }
    },

    Delete() {
      this.customText = ''
    },

    ToUpperCaseAll() {
      this.customText = this.customText.trim().toUpperCase()
    },

    ToLowerCaseAll() {
      this.customText = this.customText.trim().toLowerCase()
    },

    ToCapitalizeSentence() {
      this.customText =
        this.customText.trim().charAt(0).toUpperCase() +
        this.customText.trim().slice(1).toLowerCase()
    },

    ToCapitalizeWords() {
      const regex = /(\b[a-z](?!\s))/g
      const converted = this.customText.replace(/\b\w/g, (c) => c.toUpperCase())
      this.customText = converted
    },

    CopyToClipboard() {
      navigator.clipboard.writeText(this.customText)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 3000)
    },
  },
})
</script>
