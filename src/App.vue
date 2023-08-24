<template>
  <div id="app">
    <AppNavbar/>
    <TodoItem/>
    <StatusBar/>
    <ProgressBar/>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import AppNavbar from './components/AppNavbar.vue'
import StatusBar from './components/StatusBar.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
    name: 'App',
    components: {
      TodoItem,
      AppNavbar,
      StatusBar,
      ProgressBar
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
