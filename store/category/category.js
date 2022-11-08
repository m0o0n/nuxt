export const state =()=> ({ 
    category: {}
})

export const mutations = {
    setCategory(state, category){
        state.category = category
    }

}

export const actions = {
    async GetCategory(context, payload){
        const response = await this.$axios.$get('http://bk.armar.solutions/api/category/'+ payload)
        context.commit('setCategory', response.data)
    }
}

export const getters = {
    GetCategory: state => state.category
}