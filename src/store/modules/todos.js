import axios from 'axios'

const state = {
    todos: [],
}

const getters = {
    todos: state => state.todos,
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
        return Math.round(getters.doneTodos.length / state.todos.length * 100)
    }
}

const actions = {
    // deleteTodo(context, todoId) {
    //     context.commit('DELETE_TODO', todoId)
    // }
    async deleteTodo({commit}, todoId) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            commit('DELETE_TODO', todoId)
        } catch (e) { 
            console.log(e);
        }
    },
    async addTodo({commit}, newTodo) {
        try {
            await axios.post(`https://jsonplaceholder.typicode.com/todos/`, newTodo)
            commit('ADD_TODO', newTodo)
        } catch (e) { 
            console.log(e);
        }
    },
    async getTodos({commit}){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            commit('SET_TODO', res.data);
        } catch (e) {
            console.log(e);
        }
    }
}

const mutations = {
    MARK_COMPLETE(state, todoId) {
        state.todos.map((todo) => {
            if (todo.id === todoId) todo.completed = !todo.completed 
            return todo
        })
    },
    DELETE_TODO(state, todoId) {
        state.todos = state.todos.filter((todo) => todo.id !== todoId)
    },
    ADD_TODO(state, newTodo) {
        state.todos.unshift(newTodo)
    },
    SET_TODO(state, todos) {
        state.todos = todos
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}