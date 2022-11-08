<template>
    <div>
        <h1>{{category.title.ru}}</h1>
    <span>{{category.description.ru}}</span>
    <div>
        <h2>Products</h2>
        <div v-for="product of category.products" :key="product.id">
        <h3><a href="#" @click.prevent="openProduct(product)">{{product.title.ru}}</a></h3>
        <span>{{product.description.ru}}</span>
        </div>
    </div>
    </div>
    
</template>

<script>


export default {
    // async asyncData({$axios, params}){
    //     const response = await $axios.$get('http://bk.armar.solutions/api/category/'+ params.id)
    //     return{product: response.data}
    // },
    async fetch(ctx){
        
        await ctx.store.dispatch('category/category/GetCategory', ctx.route.params.id)
    },
    data: () => ({

   
}),
computed: {
    category(){
            return this.$store.getters['category/category/GetCategory']
        }

    },
methods: {
        openProduct(product){
            this.$router.push('/product/' + product.id)
        }
    },
}
</script>