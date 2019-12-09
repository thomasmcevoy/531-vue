<template>
  <div id="menu-container">
    <div id="menu-button" @click="$emit('toggle-menu')">▾</div>
    <div id="menu" v-if="isOpen">
      <div class="menu-item">
        <input type="email" v-model="email" name="email" placeholder="EMAIL">
        <input type="password" v-model="password" name="password" placeholder="PASSWORD">
        <button @click="signIn">SIGN IN</button>
        <button @click="register">REGISTER</button>
      </div>
      <div class="menu-item">
        <div>Smallest increment</div>
        <input
          type="radio"
          name="increment"
          id="2.5"
          value="2.5"
          v-bind:checked="this.increment === 2.5"
          @click="$emit('set-increment', 2.5)"
        >
        <label for="2.5">2.5 lbs</label>
        <input
          type="radio"
          name="increment"
          id="5"
          value="5"
          v-bind:checked="this.increment === 5"
          @click="$emit('set-increment', 5)"
        >
        <label for="5">5 lbs</label>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "Menu",
  props: {
    isOpen: Boolean,
    increment: Number
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => console.log(error.code, error.message));
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => console.log(error.code, error.message));
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style>
#menu-container {
  position: fixed;
  top: 2vw;
  right: 2.5vw;
  background: white;
  color: #bbb;
  text-align: right;
  cursor: pointer;
  touch-action: manipulation;
}
@media (min-width: 414px) {
  #menu-container {
    right: 0.6em;
  }
}
@media (min-width: 850px) {
  #menu-container {
    top: 0.8em;
    right: 1em;
  }
}

#save-button,
#menu-button {
  display: inline-block;
  margin-bottom: 0.15em;
  padding: calc(0.5em + 0.5vw);
  font-size: var(--font-size);
  background-color: transparent;
  user-select: none;
}
#save-button:hover {
  background: #eee;
  border: solid thin #ddd;
}
#menu-button:hover {
  color: var(--font-color);
}
@media (min-width: 414px) {
  #save-button,
  #menu-button {
    font-size: var(--font-size-wide);
  }
}
@media (min-width: 850px) {
  #save-button,
  #menu-button {
    padding: calc(0.1em + 0.1vw);
  }
}

#menu {
  border: solid 2px white;
  border-radius: 2px;
  padding: 0.5em;
  box-shadow: 0 0 1px 2px #ccc;
}

input[type="email"],
input[type="password"] {
  display: block;
  font-weight: 400;
}
</style>
