<template>
  <div id="app">
    <NavigationBar />
    <b-container >
      <b-row>
        <b-col>
          <PrescriptionHistory :prescriptions="this.prescriptions"/>
        </b-col>
        <b-col>
          <GlassesTracker :glasses="this.glasses" :prescriptions="this.prescriptions"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios"
import GlassesTracker from "@/components/glasses/GlassesTracker.vue"
import NavigationBar from "@/components/NavigationBar.vue"
import PrescriptionHistory from "@/components/prescriptions/PrescriptionHistory.vue"

export default {
  name: 'App',
  components: {
    GlassesTracker,
    NavigationBar,
    PrescriptionHistory
  },
  data() {
    return {
      glasses: [],
      prescriptions: []
    }
  },
  methods: {
    async getGlasses() {
      await axios.get("http://localhost:3000/glasses")
                 .then((res) => {this.glasses = res.data})
    },
    async getPrescriptions() {
      await axios.get("http://localhost:3000/prescriptions")
                 .then((res) => {this.prescriptions = res.data})
    }
  },
  mounted() {
    this.getGlasses()
    this.getPrescriptions()

    this.$root.$on("updateGlasses", () => {
      this.getGlasses()
    })
    this.$root.$on("updatePrescriptions", () => {
      this.getPrescriptions()
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div .card {
  margin-top: 12px;
}
</style>
