<template>
    <div class="todo-app">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

export default defineComponent({
    name: "TodoApp",
    components: {
        TodoForm,
        TodoList,
    },
});
</script>

<style scoped>
.todo-app {
    padding: 5vh;
    min-height: 100vh;
    width: 30vw;
    background-color: #f7f9fc;
}
</style>