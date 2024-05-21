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
          <b-col>
            Prism
          </b-coL>
          <b-col>
            Base
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
          <b-col class="prescription-input">
            <b-form-input id="right-prism-input" v-model="right.prism"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="right-base-input" v-model="right.base"/>
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
          <b-col class="prescription-input">
            <b-form-input id="left-prism-input" v-model="left.prism"/>
          </b-col>
          <b-col class="prescription-input">
            <b-form-input id="left-base-input" v-model="left.base"/>
          </b-col>
        </b-row>
      </b-container>
      <cyl-tooltip target="cyl-tooltip" />
      <sph-tooltip target="sph-tooltip" />
    </b-card-text>

    <b-button href="#" variant="primary">Store</b-button>
  </b-card>
</template>

<script>
import { BIconQuestionCircle } from 'bootstrap-vue'
import CylTooltip from './tooltips/CylinderTooltip.vue'
import SphTooltip from './tooltips/SphereTooltip.vue'

export default {
  name: 'PrescriptionForm',
  components: {
    BIconQuestionCircle,
    CylTooltip,
    SphTooltip
  },
  data() {
    return {
      left: {
        axis: 0,
        base: 0,
        cyl: 0,
        prism: 0,
        sph: 0
      },
      right: {
        axis: 0,
        base: 0,
        cyl: 0,
        prism: 0,
        sph: 0
      }
    }
  }
}
</script>

<!-- <style scoped>
.prescription-input {
  columns: 3;
}
</style> -->