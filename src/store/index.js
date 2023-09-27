import Vue from 'vue'
import Vuex from 'vuex'

//import modules
import auth from './modules/auth'
import todos from './modules/todos'

Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todos
    },
    state: {
        
    },
    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        
    }
}

const store = new Vuex.Store(storeData)

export default store