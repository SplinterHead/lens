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
import PrescriptionModal from "@/components/PrescriptionModal.vue"
import PrescriptionTable from "@/components/PrescriptionTable.vue"

export default {
  name: "PrescriptionHistory",
  components: {
    PrescriptionModal,
    PrescriptionTable
  },
  data () {
    return {
      prescriptions: []
    }
  },
  methods: {
    async getPrescriptions() {
      await axios.get("http://localhost:3000/prescription")
                 .then((res) => {this.prescriptions = res.data})
    }
  },
  mounted() {
    this.getPrescriptions()
    this.$root.$on("newPrescription", () => {
      this.getPrescriptions()
    })
    this.$root.$on("deletePrescription", (prescriptionId) => {
      axios.delete(`http://localhost:3000/prescription/${prescriptionId}`)
      .then(() => {
        this.getPrescriptions()
      })
    })
  }
}
</script>