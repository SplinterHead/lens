<template>
  <div>
    <b-card title="Glasses">
      <b-card-text>
        <div v-if="glasses.length > 0">
          <b-card v-for="pair in glasses" :key="pair.id" :img-src="pair.img_url" img-left class="glasses-info" @click="$bvModal.show(pair.id)">
            <b-card-text>
              Made by {{ pair.brand }}
              <br />
              Puchased from {{ pair.retailer }}
            </b-card-text>
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

    <!-- <b-modal v-for="pair in glasses" :key="pair.id" :id="pair.id" :title="modalTitle(pair)">
      <p class="my-4">Hello from modal!</p>
    </b-modal> -->
    <new-glasses-form-vue />
  </div>
</template>

<script>
import axios from "axios"
import NewGlassesFormVue from './NewGlassesForm.vue'

export default {
  name: 'GlassesTracker',
  components: {
    NewGlassesFormVue
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

.card-img-left {
  width: 150px;
}
</style>