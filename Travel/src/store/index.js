import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)


export default new Vuex.Store({
    state: state,
    actions: {
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        }
    },
    //也可以直接用mutation 不用action
    mutations: mutations,
    getters: {
        doubleCity (state){
            return state.city +"aaaa" +state.city
        }
    }
})