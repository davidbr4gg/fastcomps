<template>
  <div id="app">
    <fc-header></fc-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="purchase-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="shipping"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <fc-footer></fc-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { dbMenuRef, dbOrdersRef } from './firebaseConfig'


export default {
  components: {
    fcHeader: Header,
    fcFooter: Footer
  },
  created () {
    this.$store.dispatch('setMenuRef', dbMenuRef),
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
}
</script>

<style>

</style>
