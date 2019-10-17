<template>
  <form>
    <h3>Add Product:</h3>

    <div class="form-group row">
      <label class="col-sm-3">Name</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.name"/>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Description</label>
      <div class="col-sm-9">
        <textarea type="text" class="form-control" rows="3" v-model="newProduct.description"></textarea>
      </div>
    </div>

    <p>
      <strong>Option 1</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-3">Model</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[0].storage" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[0].price"/>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Quantity</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[0].quantity" />
      </div>
    </div>

    <p>
      <strong>Option 2</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-3">Model</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[1].storage"/>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[1].price" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Quantity</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" v-model="newProduct.options[1].quantity" />
      </div>
    </div>

    <div class="form-group-row">
      <button type="button" class="btn btn-success btn-block" @click="addMenuItem">Add Product</button>
    </div>
  </form>
</template>

<script>
import { dbMenuRef } from '../firebaseConfig'
export default {
  data() {
    return {
      newProduct: {
        name: '',
        description: 'E.G. This laptop has the new ninth-generation 8-core Intel processor',
        options: [
          {
            storage: '2018',
            price: 3499,
            quantity: 100
          },
          {
            storage: '2019',
            price: 3799,
            quantity: 100
          }
        ]
      }
    };
  },
  methods: {
      addMenuItem() {
          dbMenuRef.push(this.newProduct);
      }
  }
};
</script>