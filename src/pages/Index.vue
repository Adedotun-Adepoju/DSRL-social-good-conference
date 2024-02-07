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
    <div class="menu-icon">
      <q-icon name="menu" size="s" class="icon" color="white">
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup v-for="(item, keys) in navItems" :key="keys" @click="navItemClick(item)">
              <q-item-section>{{ item.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>  
      </q-icon>
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
    <div class="topics">
      <div v-for="(item, key) in topics" :key="key" class="topic-container">
        <p class="number">{{ key + 1 }}</p>
        <p class="topic">{{ item.name }}</p>
      </div>
    </div>
    <div class="details">
      <p class="about">About the Conference</p>  
      <p class="description">Details to be added...</p>
    </div>
  </div>
  <div class="speakers-section" id="speakers">
    <p class="heading">Speakers</p>
    <div class="speaker-tiles">
      <template v-for="(person, key) in speakers">
        <SpeakerCard
          :key="key"
          :name="person.name"
          :title="person.title"
          :image="person.image_link"
          :leftMargin="person.left_margin"
          class="speaker-card"
        />
      </template>
    </div>
  </div>
  <div class="agenda-section" id="agenda">
    <p class="heading">Agenda</p>
    <p class="body">To be confirmed....</p>
  </div>
</div>
</template>

<script>
import { speakers } from "src/data/constants"
import SpeakerCard from "src/components/speakers-card/speakers.vue"
export default {
  name: 'PageIndex',
  components: {
    SpeakerCard,
  },

  data() {
    return {
      speakers: speakers,
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
      ],
      topics: [
        {
          name: "Violence Prevention"
        },
        {
          name: "Homelessness"
        },
        {
          name: "Educational Equity"
        },
        {
          name: "Reentry"
        }
      ]
    }
  },
  methods: {
    navItemClick(item){
      const element = document.getElementById(item.name.toLowerCase())
      if(element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>
