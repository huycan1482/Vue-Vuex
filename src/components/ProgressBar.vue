<template>
    <div v-if="isAuthenticated">
        <p class="progress-bar">Progress: {{ progress }} %</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProgressBar',
    // computed: ({
    //     progress() {
    //         return Math.round(this.$store.state.todos.filter(todo => todo.completed).length / this.$store.state.todos.length * 100);
    //     }
    // })
    computed: {...mapGetters(['progress', 'isAuthenticated'])}
}
</script>

<style>
.progress-bar {
    padding: 5px;
    text-align: center;
    background: rgb(106, 248, 118);
    color: black;
}
</style>