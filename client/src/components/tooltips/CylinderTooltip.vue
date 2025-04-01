<template>
  <b-tooltip :target="target" triggers="hover">
    {{ shortDesc }}
  </b-tooltip>
</template>

<script>
export default {
  name: 'CylinderTooltip',
  props: {
    target: String
  },
  data() {
    return {
      shortDesc: "CYL stands for Cylinder, which is the correction for astigmatism",
      longDesc: [
        "The abbreviation CYL on your prescription stands for cylinder.",
        "This indicates the amount of lens power required to correct any astigmatism present.",
        "Astigmatism results from having a cornea that is not perfectly spherical.",
        "An empty box means there is no astigmatism and your eyes are perfectly spherical.",
        "A low number, like 0.25, means your eyes are not quite round and a higher number, like 3.00, means your eyes are quite oval."
      ]
    }
  }
}
</script>

