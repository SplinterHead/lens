<template>
  <b-card title="Prescription History">
    <b-card-text>
      <div v-if="prescriptions.length > 0">
        <p v-for="p in prescriptions" :key="p.id">
          <prescription-table :prescription="p"/>
        </p>
        <b-button @click="$bvModal.show('new-prescription-modal')">Add</b-button>
      </div>
      <div v-else>
        There are no prescriptions
        <p />
        <a href="#" @click="$bvModal.show('new-prescription-modal')">Add a new prescription</a>
      </div>
      <PrescriptionModal />
    </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios"
import PrescriptionModal from "@/components/prescriptions/PrescriptionModal.vue"
import PrescriptionTable from "@/components/prescriptions/PrescriptionTable.vue"

const apiUrl = window.VUE_APP_API_URL

export default {
  name: "PrescriptionHistory",
  components: {
    PrescriptionModal,
    PrescriptionTable
  },
  props: {
    prescriptions: []
  },
  methods: {
    deletePrescription: async function(prescriptionId) {
      await axios.delete(`${apiUrl}/prescriptions/${prescriptionId}`)
        .then(() => {this.$root.$emit("updatePrescriptions")})
    }
  },
  mounted() {
    this.$root.$on("deletePrescription", (prescriptionId) => {
      this.deletePrescription(prescriptionId)
    })
  }
}
</script>