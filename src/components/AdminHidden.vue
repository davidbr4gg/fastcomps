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

    <div class="row">
      <div class="col-sm-12">
        <h3 class="fcpurchases">Purchases: {{ numberOfOrders }}</h3>
        <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">

          <thead class="thead-light">
            <tr>
              <th>Item</th>
              <th>Model</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>

            <div class="order-number">
              <strong><em>Order Number: {{ index +1  }}</em></strong>
              <button class="btn btn-outline-danger btn-sm"
                @click="removeOrderItem(orders['.key'])">x</button>
            </div>

            <tr v-for="orderItems in orders" :key="orderItems">
              <td>{{ orderItems.name }}</td>
              <td>{{ orderItems.storage }}</td>
              <td>{{ orderItems.quantity }}</td>
              <td>{{ orderItems.price | currency }}</td>
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