<template>
  <div class="exercise-header">
    <h3>{{ exercise.name }}</h3>
    <h4 class="training-max-container">
      <input type="text" class="training-max" v-if="week === 'I'" v-model="exercise.trainingMax">
    </h4>
  </div>
</template>

<script>
export default {
  name: "ExerciseHeader",
  props: {
    exercise: Object,
    week: String
  }
};
</script>

<style>
.exercise-header {
  width: 33.33%;
  text-transform: capitalize;
}

.training-max-container {
  text-align: right;
}
.training-max {
  border: none;
  background: #eee;
  height: 1.33rem;
  width: 2rem;
  text-align: center;
  touch-action: manipulation;
}
</style>
