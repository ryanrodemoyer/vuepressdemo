import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// import fetch from 'node-fetch'; // or your preferred method

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        example: [],
    },
    getters: {
        example: state => state.example,
    },
    actions: {
        UPDATE_EXAMPLE: async ({ commit }) => {
            try {
                const awaited = await axios.get('https://myexample.com/file.json');
                const promised = await awaited.json();

                commit('SET_EXAMPLE', promised); // In nuxt we would have to return this for asyncFetch
            } catch (err) {
                console.error(err);
            }
        }
    },
    mutations: {
        SET_EXAMPLE: (state, data) => {
            state.example = data;
        },
    },
});