<template>
  <div>
    <b-card title="Glasses Tracker">
      <b-card-text>
        <b-card v-for="pair in glasses" :key="pair.id" :img-src="pair.image" img-left class="glasses-info" @click="$bvModal.show(pair.id)">
          <b-card-text>Made by {{ pair.manufacturer }}, bought at {{ pair.retailer }}</b-card-text>
        </b-card>
      </b-card-text>
    </b-card>

    <b-modal v-for="pair in glasses" :key="pair.id" :id="pair.id" :title="modalTitle(pair)">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'GlassesTracker',
  props: {
    currentPrescription: Object
  },
  methods: {
    modalTitle(pair) {
      return ['Your', pair.manufacturer, pair.sunglasses ? 'sunglasses' : 'glasses'].join(' ')
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

.card-img-left {
  width: 150px;
}
</style>