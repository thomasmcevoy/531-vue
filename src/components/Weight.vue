<template>
  <div class="column">
    <div class="column-title">Weight</div>
    <div class="weight">{{ getWeight(1) }}</div>
    <div class="weight">{{ getWeight(2) }}</div>
    <div class="weight">{{ getWeight(3) }}</div>
  </div>
</template>

<script>
export default {
  name: "Weight",
  props: {
    week: String,
    trainingMax: Number,
    increment: Number
  },
  methods: {
    getWeight(set) {
      switch (this.week) {
        case "I":
          switch (set) {
            case 1:
              return this.roundDown(this.trainingMax * 0.65);
            case 2:
              return this.roundDown(this.trainingMax * 0.75);
            case 3:
              return this.roundDown(this.trainingMax * 0.85);
            default:
              return 0;
          }
        case "II":
          switch (set) {
            case 1:
              return this.roundDown(this.trainingMax * 0.7);
            case 2:
              return this.roundDown(this.trainingMax * 0.8);
            case 3:
              return this.roundDown(this.trainingMax * 0.9);
            default:
              return 0;
          }
        case "III":
          switch (set) {
            case 1:
              return this.roundDown(this.trainingMax * 0.75);
            case 2:
              return this.roundDown(this.trainingMax * 0.85);
            case 3:
              return this.roundDown(this.trainingMax * 0.95);
            default:
              return 0;
          }
        case "IV":
          switch (set) {
            case 1:
              return this.roundDown(this.trainingMax * 0.4);
            case 2:
              return this.roundDown(this.trainingMax * 0.5);
            case 3:
              return this.roundDown(this.trainingMax * 0.6);
            default:
              return 0;
          }
        default:
          return 0;
      }
    },
    roundDown(weight) {
      if (isNaN(weight)) return 0;
      return Math.floor(weight / this.increment) * this.increment;
    }
  }
};
</script>

<style>
</style>
