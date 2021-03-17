const state = {
    count: 1
};

const getters = {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
};

const mutations = {
    increment(state, addValue) {
        state.count += addValue;
    },
    decrement(state, value) {
        state.count -= value;
    },
}

const actions = {
    incrementAction(context, value){
        context.commit('increment', value);
    },
    decrementAction(context, value){
        context.commit('decrement', value);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}