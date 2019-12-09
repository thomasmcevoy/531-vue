import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAy5o-snkQ8Xf6lzyk9LQiodfNdq3lfWyM",
  authDomain: "vue-45433.firebaseapp.com",
  databaseURL: "https://vue-45433.firebaseio.com",
  projectId: "vue-45433",
  storageBucket: "vue-45433.appspot.com",
  messagingSenderId: "964663990189",
  appId: "1:964663990189:web:c9d428388b03adf5"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App)
}).$mount("#app");
