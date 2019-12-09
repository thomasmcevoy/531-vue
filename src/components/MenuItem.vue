<template>
  <div class="menu-item">{{ label }}</div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: String
  }
};
</script>

<style>
.menu-item {
  padding: calc(0.6em + 0.6vw) calc(1em + 1vw) calc(0.5em + 0.5vw);
  font-size: 0.625em;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 0.4em;
}
.menu-item:hover {
  color: var(--font-color);
  background-color: #eee;
}
</style>
