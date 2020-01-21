import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// import fetch from 'node-fetch'; // or your preferred method

import fs from 'fs'

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
                const awaited = await axios.get('/testfile.json');
                const promised = await awaited.data;

                commit('SET_EXAMPLE', promised);
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
// need a new commit