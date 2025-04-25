<template>
  <b-card title="Summary">
    <b-card-text v-if="this.currentPrescription == {}">
      {{ this.currentPrescription }}
    </b-card-text>
    <b-card-text id="long-sighted" v-if="this.currentPrescription.l_sph > 0 && this.currentPrescription.r_sph > 0">
      You are <strong>long-sighted</strong> which means you might have trouble seeing things close to you, like books or screens
    </b-card-text>
    <b-card-text id="short-sighted" v-if="this.currentPrescription.l_sph < 0 && this.currentPrescription.r_sph < 0">
      You are <strong>short-sighted</strong> which means you may struggle to see things clearly when they are further away
    </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios"

export default {
  name: "PrescriptionModal",
  data () {
    return {
      currentPrescription: Object
    }
  },
  methods: {
    async getCurrentPrescription() {
      await axios.get("http://localhost:3000/prescriptions")
                 .then((res) => {this.currentPrescription = res.data[0]})
    }
  },
  mounted() {
    this.getCurrentPrescription()
  }
}
</script>