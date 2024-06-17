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
    <new-glasses-form />
  </div>
</template>

<script>
import axios from "axios"
import { BIconEyeglasses, BIconSunglasses } from 'bootstrap-vue'
import NewGlassesForm from './NewGlassesForm.vue'

export default {
  name: 'GlassesTracker',
  components: {
    BIconEyeglasses,
    BIconSunglasses,
    NewGlassesForm
  },
  props: {
    currentPrescription: Object
  },
  data() {
    return {
      glasses: []
    }
  },
  methods: {
    async getGlasses() {
      await axios.get("http://localhost:3000/glasses")
                 .then((res) => {this.glasses = res.data})
    },
    modalTitle(pair) {
      return ['Your', pair.brand, pair.sunglasses ? 'sunglasses' : 'glasses'].join(' ')
    }
  },
  mounted() {
    this.getGlasses()
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