<template>
    <div>
        <h1>Categories</h1>
        <div class="postsContainer">
            <div class="productCard" v-for="category of categories" :key="category.id">
        <a href="#" @click.prevent="openCategory(category)">{{category.title.ru}}</a>
        <span>{{category.description.ru}}</span>  
        </div>
        </div>
    
        
    </div>
</template>


<script>


export default {
    async fetch({store}){
        if(store.getters['categories/categories/getCategories'].length === 0){
            await store.dispatch('categories/categories/GetAllCategories')
        }

    },
    // async asyncData({$axios}){
    //     const response = await $axios.$get('http://bk.armar.solutions/api/categories')
    //     return{categories: response.data}
    // },
    data: () => ({

        products: []
    }),
    computed: {
        categories(){
            return this.$store.getters['categories/categories/getCategories']
        }

    },
    methods: {
        openCategory(category){
            this.$router.push('/categories/' + category.id)
        }
    },
}
</script>

<style>
.productCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 15px;
    margin-bottom: 10px;
}
</style>