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
        <p class="affiliation"> Morgan State University</p>
        <a href="mailto:radwan.shushane@morgan.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>
        <li class="chair">Amml Hussein, Conference Co-Chair</li>
        <p class="affiliation"> Council on Social Work Education</p>
        <a href="mailto:ahussein@cswe.org" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>
        <li class="chair">Juan A Rios, Conference Co-Chair</li>
        <p class="affiliation">Seton Hall University</p>
        <a href="mailto:juan.rios@shu.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>
      </ul>
    </div>
    <div class="title">
      <p class="section-header">Committee Members</p>
      <ul class="list">
        <li class="chair">Amjad Ali </li>
        <p class="affiliation">Morgan State University</p>
        <a href="mailto:amjad.ali@morgan.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Maggie Cherry</li>
        <p class="affiliation">Health Equity Clinical Specialist at Google</p>
        <a href="mailto:drmchery@gmail.com" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Priscilla Carmona</li>
        <p class="affiliation">Phd Student Reentry and Restorative Justice</p>
        <a href="mailto:priscilla.carmona1@fordham.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Yesem Peker</li>
        <p class="affiliation">Columbus State University</p>
        <a href="mailto:peker_yesem@columbusstate.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Lydia Ray</li>
        <p class="affiliation">Columbus State University</p>
        <a href="mailto:ray_lydia@columbusstate.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Lixin Wang</li>
        <p class="affiliation">Columbus State University</p>
        <a href="mailto:wang_lixin@columbusstate.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Rania Hodhod </li>
        <p class="affiliation">Columbus State University</p>
        <a href="mailto:hodhod_rania@columbusstate.edu" target="_blank" rel="noopener noreferrer">
          <q-icon name="email" size="sm" color="black"/>
        </a>

        <li class="chair">Bezaleel Akinbami</li>
        <p class="affiliation">Data Science Research Lab, Morgan State University</p>

        <li class="chair">Dapiriye Briggs</li>
        <p class="affiliation">Data Science Research Lab, Morgan State University</p>

        <li class="chair">Clyde Baidoo</li>
        <p class="affiliation">Data Science Research Lab, Morgan State University</p>

        <li class="chair">Caleb Kadiri</li>
        <p class="affiliation">Data Science Research Lab, Morgan State University</p>

        <li class="chair">Adedotun Adepoju</li>
        <p class="affiliation">Data Science Research Lab, Morgan State University</p>
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
          name: "About",
          slug: "about",
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
          name: "Program",
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
        // {
        //   name: "Register",
        //   slug: "register",
        //   to: "/",
        //   redirect: false
        // }
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
