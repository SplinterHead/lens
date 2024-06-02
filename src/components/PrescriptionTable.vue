<template>
  <div>
    <div class="prescription-date">{{ new Date(prescription.created_at).toLocaleDateString() }}</div>
    <b-table small :items="tableData" :fields="fields" />
  </div>
</template>

<script>
export default {
  name: "PrescriptionTable",
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
        "cyl": prescription.r_cyl,
        "sph": prescription.r_sph,
        "axis": prescription.r_axis,
      }
      const l_eye = {
        "side": "L",
        "cyl": prescription.l_cyl,
        "sph": prescription.l_sph,
        "axis": prescription.l_axis,
      }
      return [r_eye, l_eye]
    }
  }
}
</script>

<style scoped>
.prescription-date {
  text-align: left
}
</style>
