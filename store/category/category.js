const state = {
	category: {},
};

const mutations = {
	SET_CATEGORY(state, category) {
		state.category = category;
	},
};

const actions = {
	async GET_CATEGORY_ACTION(context, payload) {
		const response = await this.$axios.$get(
			'http://bk.armar.solutions/api/category/' + payload
		);
		// console.log(payload)
		context.commit('SET_CATEGORY', response.data);
	},
};

const getters = {
	GetCategory: state => state.category,
};

export default {
	state,
	mutations,
	actions,
	getters
}
