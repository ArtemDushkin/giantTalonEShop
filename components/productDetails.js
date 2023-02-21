app.component('product-details', {
    props:{
        details:{
            type: Array,
            required: true
        }

    },
    template:
        /*html*/
        `<ul>Description:
        <li v-for="fact in details">{{ fact }}</li>        
      </ul>`,
}
)   