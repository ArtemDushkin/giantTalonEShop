app.component ('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :alt="description" :class="{ 'out-of-stock-img':!inStock }">
                  </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p> {{ description }}</p>
        <product-details :details="details"></product-details>
        <a :href='url'>Nearest shop</a>
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <p v-if="onSale" style="color: brown;">Sale!</p>
        <div>Frame Sizes:
          <span v-for="frameSize in frameSizes" :key="frameSize.id">  {{frameSize.size }}, </span>
        </div>
          <div v-for="(color, index) in colors" :key="color.id" @mouseover="updateColor(index)" class="color-circle" :style="{ backgroundColor: color.color}">    </span>
        </div>
        <button class="button" :class="{ disabledButton:!inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
        <button class="button2" @click="removeFromCart">Reset Cart</button>

    </div>
    <review-list v-if='reviews.length':reviews='reviews'></review-list>
    <review-form @review-submitted="addReview"></review-form>`,

    data(){
        return {
            product: 'Mountain bike',
            brand: 'Giant',
            model: 'Talon',
            level: 3,
            description: 'This is the best bike in the City',
            selectedColor: 0,
            url: 'https://tosport.su/velosipedniy-sport/velosipedi/gornie-velosipedi/giant-velosiped-talon-29-3-2022-giant-velosiped-talon-29-3-2022',
            inventory: 1,
            details: ['29" Wheels', 'Alluminium frame', 'Fork Suntour XCT', 'Shimano groupset'],
            // onSale: true,
            frameSizes: [
                {id: 1, size: 17},
                {id: 2, size: 19},
                {id: 3, size: 21},
             ],
             colors: [
                {id:'grey', color: 'grey', image: "./assets/images/talon.jpg", quantity: 8},
                {id:'orange', color: 'orange', image: "./assets/images/talon-orange.jpg", quantity: 20},
             ],
             reviews: [],
        }
    
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.colors[this.selectedColor].id)
        },
        updateColor(index) {
            this.selectedColor = index
        },
        removeFromCart() {
            this.$emit('reset-cart')
        },
        addReview(review){
            this.reviews.push(review)

        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand + ' ' + this.model + ' ' + this.level 
        },
        image() {
            return this.colors[this.selectedColor].image
        },
        inStock() {
            return this.colors[this.selectedColor].quantity
        },
        onSale() {
            return this.colors[this.selectedColor].quantity>10;
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            };
            return 2.99;
        }
    }

})

