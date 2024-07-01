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
      <b-form-group
        id="prescription-group"
        label="Prescription:"
        label-for="prescription-input"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-select v-model="glassesPrescription" id="prescription" class="mb-1">
          <b-form-select-option v-for="p in prescriptions" :key="p.id" :value="p.id">
            {{ new Date(p.created_at).toLocaleDateString() }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
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
      img: "",
      glassesPrescription: "",
      prescriptions: []
    }
  },
  mounted() {
    this.getPrescriptions()
  },
  methods: {
    getPrescriptions: async function() {
      await axios.get("http://localhost:3000/prescription")
                 .then((res) => {this.prescriptions = res.data})
    },
    submitForm: async function() {
      let payload = {
        brand: this.brand,
        retailer: this.retailer,
        img: this.img,
        sunglasses: this.sunglasses,
      }
      axios.post("http://localhost:3000/glasses", payload)
      this.$root.$emit("newGlasses")
    }
  }
}
</script>
