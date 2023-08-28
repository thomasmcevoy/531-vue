<template>
  <div id="app" @click="handleClick" @change="save">
    <Menu
      :isOpen="menuIsOpen"
      :increment="increment"
      @toggle-menu="toggleMenu"
      @set-increment="setIncrement($event)"
    />
    <Week number="I" :exercises="exercises" :increment="increment" />
    <Week number="II" :exercises="exercises" :increment="increment" />
    <Week number="III" :exercises="exercises" :increment="increment" />
    <Week number="IV" :exercises="exercises" :increment="increment" />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Week from "./components/Week.vue";

export default {
  name: "app",
  components: {
    Menu,
    Week
  },
  created() {
    this.exercises = this.load() || this.exercises;
  },
  data() {
    return {
      menuIsOpen: false,
      increment: 5,
      exercises: [
        { name: "press", trainingMax: 100 },
        { name: "deadlift", trainingMax: 245 },
        { name: "bench", trainingMax: 140 },
        { name: "squat", trainingMax: 130 }
      ]
    };
  },
  methods: {
    handleClick(e) {
      if (
        this.menuIsOpen &&
        !document.getElementById("menu-container").contains(e.target)
      )
        this.toggleMenu();
    },
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    setIncrement(value) {
      this.increment = value;
    },
    load() {
      return JSON.parse(localStorage.getItem("exercises"));
    },
    save() {
      localStorage.setItem("exercises", JSON.stringify(this.exercises));
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --font-size: 4vw;
  --font-size-wide: calc(0.5rem + 0.5vw);
  --font-color: #222;
  --small-padding: 0.5vh;
}

body {
  margin: 0;
}

h2,
h3,
h4,
input {
  height: 1.25rem;
  margin: 0;
  padding: var(--small-padding) 0;
  font: inherit;
  font-weight: bold;
}

#app {
  width: 100%;
  margin: 0;
  border: 6px var(--font-color) double;
  padding-bottom: 2vw;
  padding-left: 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font: var(--font-size) / 1 helvetica;
  overflow: hidden;
}
@media (min-width: 414px) {
  #app {
    padding-left: 0.75em;
    font-size: var(--font-size-wide);
  }
}
@media (min-width: 850px) {
  #app {
    height: 100vh;
    padding-left: 0.33em;
  }
}
</style>
