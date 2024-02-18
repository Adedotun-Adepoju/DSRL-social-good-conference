<template>
  <div class="main-container">
    <div class="speaker-wrapper">
      <!-- <div class="circular-image"> -->
        <!-- <img :src="image" :style="{ marginLeft: `${leftMargin}` }"/> -->
      <!-- </div> -->
    </div>
    <div class="info">
      <p class="name">{{ name }}</p>
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpeakerCard",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
   leftMargin: {
    type: String,
    required: false
   }
  },
  data() {
    return {

    }
  },
  computed: {

  }, 
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "./speakers.scss"
</style>