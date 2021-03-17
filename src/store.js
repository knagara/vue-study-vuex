import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3
    },
    mutations: {
        increment(state, addValue) {
            state.count += addValue;
        },
        decrement(state, value) {
            state.count -= value;
        }
    }
})