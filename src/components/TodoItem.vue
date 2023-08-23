<template>
    <div class="todo-list">
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    computed: {
        todos() {
            return this.$store.state.todos
        }
    }
}
</script>

<style>
.todo-list ul {
    padding: 0 10px 10px 10px;
    list-style-type: none;
}

.todo-list li {
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rgb(240, 240, 240);
    color: black;
}
</style>