<template>
  <div class="column">
    <div class="column-title">Reps</div>
    <div class="reps">{{ week === "II" ? 3 : 5 }}</div>
    <div class="reps">{{ week === "I" || week === "IV" ? 5 : 3 }}</div>
    <div class="reps">{{ week === "I" || week === "IV" ? 5 : week === "II" ? 3 : 1 }}</div>
  </div>
</template>

<script>
export default {
  name: "Reps",
  props: {
    week: String
  }
};
</script>

<style>
</style>
