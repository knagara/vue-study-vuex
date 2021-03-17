import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1,
        message: ''
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3,
        message: state => state.message
    },
    mutations: {
        increment(state, addValue) {
            state.count += addValue;
        },
        decrement(state, value) {
            state.count -= value;
        },
        updateMessage(state, newMessage){
            state.message = newMessage;
        }
    },
    // 非同期処理を書ける
    actions: {
        incrementAction(context, value){
            context.commit('increment', value);
        },
        decrementAction(context, value){
            context.commit('decrement', value);
        },
        updateMessage({commit}, newMessage){
            commit('updateMessage', newMessage)
        }
    }
})