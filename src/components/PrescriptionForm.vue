<template>
  <b-card title="New Prescription">
    <b-card-text>
      <b-container class="prescription-row">
        <b-row id="prescription-left-labels">
          <b-col />
          <b-col>
            SPH <b-icon-question-circle id="sph-tooltip" />
          </b-coL>
          <b-col>
            CYL <b-icon-question-circle id="cyl-tooltip" />
          </b-coL>
          <b-col>
            Axis
          </b-coL>
        </b-row>
        <b-row id="prescription-right-right">
          <b-col>R:</b-col>
          <b-col class="prescription-input">
            <b-form-input id="right-sph-input" v-model="right.sph"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="right-cyl-input" v-model="right.cyl"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="right-axis-input" v-model="right.axis"/>
          </b-col>
        </b-row>
        <b-row id="prescription-left-eye">
          <b-col>L:</b-col>
          <b-col class="prescription-input">
            <b-form-input id="left-sph-input" v-model="left.sph"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="left-cyl-input" v-model="left.cyl"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="left-axis-input" v-model="left.axis"/>
          </b-col>
        </b-row>
      </b-container>
      <cyl-tooltip target="cyl-tooltip" />
      <sph-tooltip target="sph-tooltip" />
    </b-card-text>

    <b-button href="#" variant="primary" @click="addPrescription">Add</b-button>
  </b-card>
</template>

<script>
import axios from "axios";
import { BIconQuestionCircle } from "bootstrap-vue"
import CylTooltip from "./tooltips/CylinderTooltip.vue"
import SphTooltip from "./tooltips/SphereTooltip.vue"

export default {
  name: "PrescriptionForm",
  components: {
    BIconQuestionCircle,
    CylTooltip,
    SphTooltip
  },
  data() {
    return {
      left: {axis: 0, cyl: 0, sph: 0},
      right: {axis: 0, cyl: 0, sph: 0}
    }
  },
  methods: {
    addPrescription: function() {
      let payload = {
        l_sph: this.left.sph,
        l_cyl: this.left.cyl,
        l_axis: this.left.axis,
        r_sph: this.right.sph,
        r_cyl: this.right.cyl,
        r_axis: this.right.axis,
      }
      axios.post("http://localhost:3000/prescription", payload)
      this.$root.$emit("newPrescription")
      this.resetForm()
    },
    resetForm: function() {
      this.left = {axis: 0, cyl: 0, sph: 0}
      this.right = {axis: 0, cyl: 0, sph: 0}
    }
  }
}
</script>

<!-- <style scoped>
.prescription-input {
  columns: 3;
}
</style> -->