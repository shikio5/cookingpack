<template>
  <div id="app" class="container mt-5">
    <img class="img-fluid m-auto d-block" style="width: 300px" src="images/binaryville.svg" alt="Weird binary logo">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :products="products"
      :modalPhoto="modalPhoto"
      @add="addItem"
      @delete="deleteItem"
      @setCurrentPhoto="setCurrentPhoto"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      cart: [],
      products: null,
      modalPhoto: null
    };
  },
  computed: {
    cartTotal: function() {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function() {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    }
  },
  methods: {
    setCurrentPhoto: function(item){
      this.modalPhoto = item.replace("_tn","")
    },
    deleteItem: function(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
    addItem: function(product) {
      var whichProduct;
      var existing = this.cart.filter(function(item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    }
  },
  mounted: function() {
    //fetch("https://hplussport.com/api/products/order/price")
    // fetch("./inventory.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     this.products = data;
    //   });
    const data = require("./inventory.json");
    this.products = data;
  }
};
</script>