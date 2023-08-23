<template>
  <div id="app">
    <AppNavbar/>
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import AppNavbar from './components/AppNavbar.vue'

export default {
    name: 'App',
    components: {
      TodoItem,
      AppNavbar
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rbg(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
