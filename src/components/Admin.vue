<template>
  <div> 
    <h1 class="h1-admin">ADMIN</h1>
    <fc-admin-hidden v-if="currentUser"></fc-admin-hidden> 
    <hr>
    <div class="row admin-logout">
      <div class="col-sm-12 col-lg-6">
        <fc-login></fc-login>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from "./NewProduct.vue";
import Login from "./Login.vue";
import { mapGetters } from "vuex"
import AdminHidden from './AdminHidden.vue'

export default {
  components: {
    fcLogin: Login,
    fcAdminHidden: AdminHidden
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
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
  }
};
</script>

<style>
    .admin-purchase {
        padding-top: 50px;
    }
    .admin-logout {
      padding-left: 12px;
    }
    .h1-admin {
      text-decoration: underline;
      margin: 0%;
      text-align: left;	
;
    }
</style>