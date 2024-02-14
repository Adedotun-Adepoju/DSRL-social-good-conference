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
      <q-icon name="menu" size="md" class="icon" color="white">
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
        :class="`nav-item ${item.name == activeTab ? 'active-tab' : ''}`"
        @click="navItemClick(item)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
  <div class="body">
    <p class="heading">Program Committee</p>
    <div class="title">
      <p class="section-header">Coordination</p>
      <ul class="list">
        <li class="chair">Radhouane Chouchane, Conference Chair</li>
        <a href="mailto:radwan.shushane@morgan.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="white"/>
        </a>
        <li class="chair">Amml Hussein, Conference Co-Chair</li>
        <a href="mailto:ahussein@cswe.org" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="white"/>
        </a>
        <li class="chair">Juan A Rios, Conference Co-Chair</li>
        <a href="mailto:juan.rios@shu.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="white"/>
        </a>
      </ul>
    </div>
    <div class="title">
      <p class="section-header">Committee Members</p>
      <ul class="list">
        <li class="chair">Amjad Ali </li>
        <li class="chair">Maggie Cherry</li>
        <li class="chair">Priscilla Carmona</li>
        <li class="chair">Yesem Peker</li>
        <li class="chair">Lydia Ray</li>
        <li class="chair">Lixin Wang</li>
        <li class="chair">Rania Hodhod </li>
        <li class="chair">Bezaleel Akinbami</li>
        <li class="chair">Dapiriye Briggs</li>
        <li class="chair">Clyde Baidoo</li>
        <li class="chair">Caleb Kadiri</li>
        <li class="chair">Adedotun Adepoju</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { speakers, sponsors } from "src/data/constants"
import SpeakerCard from "src/components/speakers-card/speakers.vue"
export default {
  name: 'Committee',
  components: {
    // SpeakerCard,
  },

  data() {
    return {
      activeTab: "Committee",
      navItems: [
        {
          name: "Home",
          slug: "home",
          to: "/",
          redirect: false
        },
        {
          name: "Speakers",
          slug: "speakers",
          to: "",
          redirect: false
        },
        {
          name: "Agenda",
          slug: "agenda",
          to: "",
          redirect: false
        },
        {
          name: "Committee",
          slug: "committee",
          to: "/committee",
          redirect: true
        },
        {
          name: "Contact Us",
          slug: "contact",
          to: "/",
          redirect: false
        }
      ],
    }
  },
  methods: {
    navItemClick(item){
      if(item.redirect){
        this.$router.push('/committee')
      } else{
        this.$router.push('/')
      }
    },
    goToSponsorPage(url) {
      window.open(url);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./Committee.scss"
</style>
