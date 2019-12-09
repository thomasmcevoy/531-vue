<template>
  <div class="week">
    <h2>Week {{ number }}</h2>
    <div class="exercise" v-for="exercise in exercises" :key="exercise.name">
      <ExerciseHeader :week="number" :exercise="exercise"/>
      <Workout :week="number" :trainingMax="exercise.trainingMax" :increment="increment"/>
    </div>
  </div>
</template>

<script>
import ExerciseHeader from "./ExerciseHeader.vue";
import Workout from "./Workout.vue";

export default {
  name: "Week",
  components: {
    ExerciseHeader,
    Workout
  },
  props: {
    number: String,
    exercises: Array,
    increment: Number
  }
};
</script>

<style>
.week {
  padding-top: 0.667em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 414px) {
  .week {
    margin-top: 0;
    width: 50%;
  }
  .week:nth-of-type(3) .training-max-placeholder {
    height: 1.33rem;
  }
}
@media (min-width: 850px) {
  .week {
    padding-top: 0.4em;
    width: 25%;
  }
  .week .training-max-placeholder {
    height: 1.33rem;
  }
}
</style>
