<template>
<div class="main-container">
  <div class="navigation">
    <div class="conference-logo">
      <div class="rectangle">
        <p>Data</p>
      </div>
      <div class="text">
        <p>Science</p>
        <p>Conference</p>
      </div>
    </div>
    <div class="nav-items">
      <p
        v-for="(item, key) in navItems"
        :key="key"
        class="nav-item"
        @click="navItemClick(item)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
  <div class="title-section">
    <div class="left-divider">
    </div>
    <div class="body">
      <p class="title">Data Science For Social Good Conference</p>
      <p class="sub-title">May 20, 2024 | Morgan State University</p>
    </div>
    <div class="right-divider">
    </div>
  </div>
  <div class="about-section">
    <p class="about">About the Conference</p>
    <div class="details">
      <div class="topics">
        <div v-for="(item, key) in ['', '', '', '']" :key="key" class="topic-container">

        </div>
      </div>
    </div>
  </div>
  <div class="speakers-section">
    <p class="heading">Speakers</p>
    <div>
    
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      navItems: [
        {
          name: "Home",
          to: "/"
        },
        {
          name: "Speakers",
          to: ""
        },
        {
          name: "Agenda",
          to: ""
        },
        {
          name: "Contact Us",
          to: "/"
        }
      ]
    }
  },
  methods: {
    navItemClick(item){

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>
