<template>
  <b-tooltip :target="target" triggers="hover">
    {{ shortDesc }}
  </b-tooltip>
</template>

<script>
export default {
  name: 'SphereTooltip',
  props: {
    target: String
  },
  data() {
    return {
      shortDesc: "SPH stands for Sphere, which is the correction for long or short sightedness",
      longDesc: [
        "The SPH on your glasses prescription stands for sphere.",
        "Sphere refers to the power of your lens (measured in dioptre units) to correct the degree of short or long sight you have.",
        "Commonly, this number will be different for each eye.",
        "A + in the box indicates that you are long-sighted which means you find it difficult to see things close to you.",
        "A - shows that you find it hard to see things that are far away without glasses.",
        "The number might be very small, like 0.25, or a large number, like 6.00.",
        "The higher the number, the stronger the prescription lenses required.",
        "This can influence your choice of frames as the higher the prescription, the greater the curve of the lens needed."
      ]
    }
  }
}
</script>