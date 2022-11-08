export const state =()=> ({ 
    product: {}
})

export const mutations = {
    setProduct(state, product){
        state.product = product
    }

}

export const actions = {
    async GetProduct(context, payload){
        const response = await this.$axios.$get('http://bk.armar.solutions/api/product/'+ payload)
        context.commit('setProduct', response.data)
    }
}

export const getters = {
    GetProduct: state => state.product
}