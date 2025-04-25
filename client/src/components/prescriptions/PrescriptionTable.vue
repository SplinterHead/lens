<template>
  <div>
    <div class="prescription-date d-flex justify-content-between">
      <span>{{ new Date(prescription.created_at).toLocaleDateString() }}</span>
      <b-button variant="outline-danger">
        <b-icon-trash class="trashLink" @click="deletePrescription"/>
      </b-button>
    </div>
    <b-table small :items="tableData" :fields="fields" />
  </div>
</template>

<script>
import { BIconTrash } from 'bootstrap-vue'

export default {
  name: "PrescriptionTable",
  components: {
    BIconTrash
  },
  props: {
    prescription: Object
  },
  data() {
    return {
      fields: [
        {key: "side", label: ""},
        {key: "sph", label: "SPH"},
        {key: "cyl", label: "CYL"},
        "axis"
      ],
      tableData: this.formatTableData(this.prescription)
    }
  },
  methods: {
    formatTableData(prescription) {
      console.log("Converting prescription to table data")
      const r_eye = {
        "side": "R",
        "cyl": prescription.r_cyl.toFixed(1),
        "sph": prescription.r_sph.toFixed(1),
        "axis": prescription.r_axis.toFixed(1),
      }
      const l_eye = {
        "side": "L",
        "cyl": prescription.l_cyl.toFixed(1),
        "sph": prescription.l_sph.toFixed(1),
        "axis": prescription.l_axis.toFixed(1),
      }
      return [r_eye, l_eye]
    },
    deletePrescription() {
      this.$root.$emit("deletePrescription", this.prescription.id)
      this.$root.$emit("updatePrescriptions")
    }
  }
}
</script>

<style scoped>
.prescription-date {
  text-align: left
}

.trashLink {
  cursor: pointer;
}
</style>
