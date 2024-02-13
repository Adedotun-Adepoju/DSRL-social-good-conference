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
      <p class="sub-title">Location: 212 University Student Center, Morgan State University </p>
      <!-- <p class="sub-title">1700 East Cold Spring Lane, Baltimore, Maryland 21251</p> -->
      <p class="date">Date: May 03, 2024</p>
    </div>
    <div class="right-divider">
    </div>
  </div>
  <div class="about-section">
    <div class="topics">
      <div v-for="(item, key) in topics" :key="key" class="topic-container">
        <ul v-for="(topic,index) in item" :key="index">
          <li class="topic">{{ topic }}</li>
        </ul>
      </div>
    </div>
    <div class="details">
      <p class="about">About the Conference</p>  
      <p class="description">Practitioner/Scholar Collaboration to Localize Addressing Social Problems, mainly with the help of Data Science, in the NJ Metro and the Baltimore/DC area.</p>
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
    <p class="session">Morning Session</p>
    <div v-for="(item, index) in morningAgenda" :key="index" class="schedule">
      <p class="time">{{ item.time }}</p>
      <hr>
      <p class="title">{{ item.title }}</p>
      <p class="sub">{{ item.sub }}</p>
    </div>
    <p class="session">Afternoon Session</p>
    <div v-for="(item, index) in afternoonAgenda" :key="index" class="schedule">
      <p class="time">{{ item.time }}</p>
      <hr>
      <p class="title">{{ item.title }}</p>
      <p class="sub">{{ item.sub }}</p>
    </div>
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
          name: "Committee",
          to: ""
        },
        {
          name: "Contact Us",
          to: "/"
        }
      ],
      topics: [
        ["Violence Prevention","Depression and Anxiety" , "Psychological Distress", "Educational Equity"],
        ["Criminal Recidivism", "Conflict Resolution", "Homelessness", "Domestic Abuse"],
        ["Equity in Social Welfare Policy", "Marginalization", "Maternal Mental Health", "Opioid Use Disorders"],
        ["Cyberbullying", "Discrimination", "Caregiving", "Reentry"]
      ],
      morningAgenda: [
        {
          time: "8:30 AM - 9:00 AM",
          title: "Registration and Welcome Breakfast",
          sub: "An opportunity for attendees to mingle and enjoy light refreshments."
        },
        {
          time: "9:00 AM - 9:15 AM",
          title: "Opening Remarks",
          sub: "Speaker 1"
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Keynote Address: TBD",
          sub: "Speaker 2"
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Panel Discussion: ??",
          sub: ""
        },
        {
          time: "10:45 AM - 11:00 AM",
          title: "Coffee Break",
          sub: ""
        },
        {
          time: "11:00 AM - 12:00 PM",
          title: "Presentation 1:",
          sub: ""
        },
      ],
      afternoonAgenda: [
        {
          time: "12:00 PM - 1:00 PM",
          title: " Networking Lunch",
          sub: ""
        },
        {
          time: "1:00 PM - 1:30 PM pm",
          title: "Speaker 3",
          sub: ""
        },        
        {
          time: "2:00 PM - 2:30 PM",
          title: "Lightning Talk Session",
          sub: ""
        },
        {
          time: "3:00-3:30pm",
          title: "Speaker 4",
          sub: ""
        },
        {
          time: "3:30 PM - 3:45 PM",
          title: "Coffee Break",
          sub: ""
        },
        {
          time: "3:45 PM - 4:45 PM",
          title: "Lightning Talk Session (Continued)",
          sub: ""
        },
        {
          time: "4:45 PM - 5:00 PM",
          title: " Closing Remarks and Acknowledgments",
          sub: "Speaker 5"
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
