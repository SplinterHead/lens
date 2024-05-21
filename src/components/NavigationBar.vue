<template>
   <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>
      <p class="h2 mb-2">
        <b-icon-eyeglasses /> Lens
      </p>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
import { BIconEyeglasses } from 'bootstrap-vue'

export default {
  name: 'NavigationBar',
  components: {
    BIconEyeglasses,

  }
}
</script>