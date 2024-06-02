<template>
  <b-card title="Prescription History">
    <b-card-text>
      <p v-for="p in prescriptions" :key="p.id">
        <prescription-table :prescription="p" />
      </p>
    </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios"
import PrescriptionTable from "@/components/PrescriptionTable.vue"

export default {
  name: "PrescriptionHistory",
  components: { PrescriptionTable },
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
  }
}
</script>