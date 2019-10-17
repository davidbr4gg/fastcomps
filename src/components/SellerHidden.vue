<template>
<section>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <fc-new-product></fc-new-product>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Products:</h3>
        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th>Item</th>
              <th>Remove From Products</th>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item['.key']">
            <tr>
              <td>{{ item.name }}</td>
              <td><button class="btn btn-outline-danger btn-sm"
                  @click="removeMenuItem(item['.key'])">x</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import NewProduct from './NewProduct.vue'
import { mapGetters } from 'vuex'
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig'

export default {
  components: {
    fcNewProduct: NewProduct
  },
  computed: {
    ...mapGetters ([
      'numberOfOrders',
      'getMenuItems',
      'getOrders'
    ])
  },
  methods: {
    removeMenuItem(key) {
      dbMenuRef.child(key).remove()
    },
    removeOrderItem(key) {
      dbOrdersRef.child(key).remove()
    }
  },
  beforeRouteLeave: (to, from, next) => {
    if(confirm("Have you remembered to log out") == true ) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style>
  .fcpurchases {
    padding-top: 50px;
  }
</style>