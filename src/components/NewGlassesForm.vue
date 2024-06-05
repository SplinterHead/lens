<template>
  <b-modal
    title="Add a pair of glasses"
    id="new-glasses-modal"
    ok-only
    ok-title="Add"
    @ok="submitForm"
  >
    <b-form>
      <b-form-group
        id="brand-group"
        label="Brand:"
        label-for="brand-input"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input
          id="brand-input"
          v-model="brand"
          type="text"
          required
        />
      </b-form-group>
      <b-form-group
        id="retailer-group"
        label="Retailer:"
        label-for="retailer-input"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input
          id="retailer-input"
          v-model="retailer"
          type="text"
          required
        />
      </b-form-group>
      <b-form-group
        id="image-group"
        label="Image URL:"
        label-for="image-input"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input
          id="image-input"
          v-model="img"
          type="text"
          required
        />
      </b-form-group>
      <b-form-checkbox
        id="sunglasses"
        v-model="sunglasses"
        name="sunglasses"
        value=true
        unchecked-value=false
      >
        Sunglasses
      </b-form-checkbox>
    </b-form>
  </b-modal>
</template>

<script>
import axios from "axios"

export default {
  name: "NewGlassesForm",
  data() {
    return {
      brand: "",
      retailer: "",
      sunglasses: false,
      img: ""
    }
  },
  methods: {
    submitForm: async function() {
      console.log(this.brand)
      console.log(this.retailer)
      console.log(this.img)
      let payload = {
        brand: this.brand,
        retailer: this.retailer,
        img: this.img,
        sunglasses: this.sunglasses,
      }
      await axios.post("http://localhost:3000/glasses", payload)
    }
  }
}
</script>
