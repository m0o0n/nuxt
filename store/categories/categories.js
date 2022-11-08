export const state =()=> ({ 
    categories: []
})

export const mutations = {
    setCategories(state, categories){
        state.categories = categories
    }

}

export const actions = {
    async GetAllCategories({commit}){
        const response =  await this.$axios.$get('http://bk.armar.solutions/api/categories')
        commit('setCategories', response.data)
    }
}

export const getters = {
    getCategories: state => state.categories
}