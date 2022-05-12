<template>
  <div class="">
    <div class="h-screen flex flex-col justify-center items-center">
      <div class="m-14">
        <h1 class="font-qs text-gray-800 font-semibold text-5xl text-center">
          Text Formatter
        </h1>
      </div>
      <div>
        <textarea
          v-model="customText"
          cols="120"
          rows="10"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none mb-4 font-qs"
          placeholder="Your text..."
        ></textarea>
        <div class="flex justify-between">
          <div class="flex gap-2">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 font-qs text-sm"
              @click="ToUpperCaseAll"
            >
              Uppercase all
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 font-qs text-sm"
              @click="ToLowerCaseAll"
            >
              Lowercase all
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 font-qs text-sm"
              @click="ToCapitalizeSentence"
            >
              Capitalize sentence
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 font-qs text-sm"
              @click="ToCapitalizeWords"
            >
              Capitalize words
            </button>
          </div>
          <div class="">
            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium px-5 py-2.5 text-center font-qs flex justify-center items-center gap-1 text-sm"
              @click="CopyToClipboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy to clipboard</span>
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
    }
  },

  methods: {
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
      this.customText = this.customText
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1).toLowerCase()
        })
        .join(' ')
    },

    CopyToClipboard() {
      navigator.clipboard.writeText(this.customText)
    },
  },
})
</script>
