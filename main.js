const app = Vue.createApp({
    data(){
        return {
            cart: [],
            premium: false,
        }
    
    },
    methods: {
        updateAddedCart(id) {
            this.cart.push(id);
    },
        updateEmptyCart() {
            this.cart.length = 0;
        }
}})

