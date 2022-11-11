const state =  {
	product: {},
};

const mutations = {
	SET_PRODUCT(state, product) {
		state.product = product;
	},
};

const actions = {
	async GET_PRODUCT_ACTION(context, payload) {
		const response = await this.$axios.$get(
			'http://bk.armar.solutions/api/products/' + payload
		);
		console.log(payload)
		context.commit('SET_PRODUCT', response.data);
	},
};

const getters = {
	GetProduct: state => state.product,
};


export default {
    state,
    mutations,
    actions,
	getters
}