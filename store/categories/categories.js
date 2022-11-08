const state = {
	categories: [],
};

const mutations = {
	SET_CATEGORIES(state, categories) {
		state.categories = categories;
	},
};

const actions = {
	async GET_ALL_CATEGORIES_ACTION({ commit }) {
		const response = await this.$axios.$get(
			'http://bk.armar.solutions/api/categories'
		);
		commit('SET_CATEGORIES', response.data);
	},
};

const getters = {
	getCategories: state => state.categories,
};

export default {
    state,
    mutations,
    actions,
	getters
}