<template>
  <b-modal
    title="New Prescription"
    id="new-prescription-modal"
    ok-only
    ok-title="Add"
    @ok="addPrescription"
  >
    <b-container class="prescription-row">
      <b-row id="prescription-left-labels">
        <b-col class="row-title"/>
        <b-col class="form-header">
          SPH <b-icon-question-circle id="sph-tooltip" />
        </b-coL>
        <b-col class="form-header">
          CYL <b-icon-question-circle id="cyl-tooltip" />
        </b-coL>
        <b-col class="form-header">
          Axis
        </b-coL>
      </b-row>
      <b-row id="prescription-right-right">
        <b-col class="row-title">R</b-col>
        <b-col class="prescription-input">
          <b-form-input id="right-sph-input" v-model="right.sph" :formatter="format_number"/>
        </b-col>
        <b-col class="prescription-input">
          <b-form-input id="right-cyl-input" v-model="right.cyl" :formatter="format_number"/>
        </b-col>
        <b-col class="prescription-input">
          <b-form-input id="right-axis-input" v-model="right.axis" :formatter="format_number"/>
        </b-col>
      </b-row>
      <b-row id="prescription-left-eye">
        <b-col class="row-title">L</b-col>
        <b-col class="prescription-input">
          <b-form-input id="left-sph-input" v-model="left.sph" :formatter="format_number"/>
        </b-col>
        <b-col class="prescription-input">
          <b-form-input id="left-cyl-input" v-model="left.cyl" :formatter="format_number"/>
        </b-col>
        <b-col class="prescription-input">
          <b-form-input id="left-axis-input" v-model="left.axis" :formatter="format_number"/>
        </b-col>
      </b-row>
    </b-container>
    <div id="validation-error" v-if="showValidationError">
      Error: Please ensure all values are numbers in range
    </div>
    <cyl-tooltip target="cyl-tooltip" />
    <sph-tooltip target="sph-tooltip" />
  </b-modal>
</template>

<script>
import axios from "axios";
import { BIconQuestionCircle } from "bootstrap-vue"
import CylTooltip from "@/components/tooltips/CylinderTooltip.vue"
import SphTooltip from "@/components/tooltips/SphereTooltip.vue"

export default {
  name: "PrescriptionModal",
  components: {
    BIconQuestionCircle,
    CylTooltip,
    SphTooltip
  },
  data() {
    return {
      left: {axis: 0, cyl: 0, sph: 0},
      right: {axis: 0, cyl: 0, sph: 0},
      showValidationError: false,
      validation: {
        min: -10,
        max: 10,
        decimal: 100
      }
    }
  },
  methods: {
    addPrescription: async function() {
      let payload = {
        l_sph: this.left.sph,
        l_cyl: this.left.cyl,
        l_axis: this.left.axis,
        r_sph: this.right.sph,
        r_cyl: this.right.cyl,
        r_axis: this.right.axis,
      }
      await axios.post("http://localhost:3000/prescriptions", payload)
      .then(() => {
        this.resetForm()
        this.$root.$emit("updatePrescriptions")
      })
    },
    format_number(e) {
      if ((e > this.validation.max || e < this.validation.min) || Math.round(e * this.validation.decimal) / this.validation.decimal != e) {
        this.showValidationError = true
        return this.last_value
      } else {
        this.showValidationError = false
        this.last_value = e
        return e
      }
    },
    resetForm: function() {
      this.left = {axis: 0, cyl: 0, sph: 0}
      this.right = {axis: 0, cyl: 0, sph: 0}
    }
  }
}
</script>

<style scoped>
.form-header {
  padding-left: 25px;
}

.row-title {
  text-align: right;
  flex-grow: 0;
  width: 30px;
}
</style>