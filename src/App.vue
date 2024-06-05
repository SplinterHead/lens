<template>
  <div id="app">
    <NavigationBar />
    <b-container >
      <b-row>
        <b-col>
          <PrescriptionHistory />
        </b-col>
        <b-col>
          <GlassesTracker />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GlassesTracker from "./components/GlassesTracker.vue"
import NavigationBar from "./components/NavigationBar.vue"
import PrescriptionHistory from "./components/PrescriptionHistory.vue"

export default {
  name: 'App',
  components: {
    GlassesTracker,
    NavigationBar,
    PrescriptionHistory
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div .card {
  margin-top: 12px;
}
</style>
