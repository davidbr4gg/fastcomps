<template>
  <div class="row">
    <div>
      <form>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter Email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter Password" />
        </div>
        <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
        <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
import { store } from "../store/store.js";

Firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});

export default {
  methods: {
    signIn() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === "auth/wrong-password") {
            alert("Wrong Password");
          } else {
            alert(errorMessage);
          }
        });
    },
    signOut() {
      Firebase.auth()
        .signOut()
        .then(function() {
          alert("Logged Out");
        })
        .catch(function(error) {
          alert("error");
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<style>
  
</style>