<template>
  <div class="workout">
    <Reps :week="week"></Reps>
    <Weight :week="week" :trainingMax="trainingMax" :increment="increment"/>
  </div>
</template>

<script>
import Reps from "./Reps.vue";
import Weight from "./Weight.vue";

export default {
  name: "Workout",
  components: {
    Reps,
    Weight
  },
  props: {
    week: String,
    trainingMax: Number,
    increment: Number
  }
};
</script>

<style>
.workout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.column {
  text-align: right;
}

.column-title {
  padding: var(--small-padding) 0;
  font-style: italic;
}
.column:first-child .column-title {
  text-align: left;
}

.reps,
.weight,
.column {
  padding: var(--small-padding) 0;
}
</style>
