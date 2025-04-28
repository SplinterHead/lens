<template>
  <div>
    <b-card title="Glasses">
      <b-card-text>
        <div v-if="glasses.length > 0">
          <b-card v-for="pair in glasses" :key="pair.id" img-left class="glasses-info" @click="$bvModal.show(pair.id)">
            <b-row no-gutters>
              <b-col md="3" class="card-img">
                <b-card-img v-if="pair.img_url !=''" :src="pair.img_url"/>
                <b-icon-sunglasses v-else-if="pair.img_url == '' && pair.sunglasses == 'true'" font-scale="3"/>
                <b-icon-eyeglasses v-else font-scale="3"/>
              </b-col>
              <b-col md="9">
                <b-card-text>
                  Made by {{ pair.brand }}
                  <br />
                  Puchased from {{ pair.retailer }}
                </b-card-text>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3" />
              <b-col md="9" class="d-flex justify-content-center mt-3">
                <b-icon class="mt-auto mb-auto" :icon="displayIcon(pair)" :variant="displayVariant(pair)" />
                <span class="pl-2">{{ displayMessage(pair) }}</span>
              </b-col>
            </b-row>
          </b-card>
          <b-button @click="$bvModal.show('new-glasses-modal')">Add</b-button>
        </div>
        <div v-else>
          There are no glasses
          <p />
          <a href="#" @click="$bvModal.show('new-glasses-modal')">Add a pair</a>
        </div>
      </b-card-text>
    </b-card>
    <new-glasses-form :prescriptions="prescriptions"/>
  </div>
</template>

<script>
import { BIcon, BIconEyeglasses, BIconSunglasses } from 'bootstrap-vue'
import NewGlassesForm from '@/components/glasses/NewGlassesForm.vue'

export default {
  name: 'GlassesTracker',
  components: {
    BIcon,
    BIconEyeglasses,
    BIconSunglasses,
    NewGlassesForm
  },
  props: {
    glasses: [],
    latestPrescription: Object,
    prescriptions: []
  },
  methods: {
    displayIcon(pair) {
      if (pair.prescription_id == this.latestPrescription.id) {
        return "check-square"
      } else if (pair.prescription_id == this.latestPrescription.id - 1 || pair.prescription_id == this.latestPrescription.id + 1) {
        return "exclamation-square"
      } else {
        return "x-square"
      }
    },
    displayMessage(pair) {
      if (pair.prescription_id == this.latestPrescription.id) {
        return "Has your current prescription"
      } else if (pair.prescription_id == this.latestPrescription.id - 1) {
        return "Has your previous prescription"
      } else {
        return "Has an old prescription"
      }
    },
    displayVariant(pair) {
      if (pair.prescription_id == this.latestPrescription.id) {
        return "success"
      } else if (pair.prescription_id == this.latestPrescription.id - 1 || pair.prescription_id == this.latestPrescription.id + 1) {
        return "warning"
      } else {
        return "danger"
      }
    },
    modalTitle(pair) {
      return ['Your', pair.brand, pair.sunglasses ? 'sunglasses' : 'glasses'].join(' ')
    }
  }
}
</script>

<style scoped>
.glasses-info {
  margin-top: 8px;
  box-shadow: 0 0px 0px rgba(114, 114, 114, 0.8);
  transition: box-shadow 0.3s ease-in-out;
}

.glasses-info:hover {
  box-shadow: 0 5px 10px rgba(114, 114, 114, 0.8);
}

.card-img img, .card-img svg{
  max-height: 48px;
  width: auto;
}

button {
  margin-top: 16px;
}
</style>