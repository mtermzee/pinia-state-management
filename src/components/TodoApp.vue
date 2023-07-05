<template>
    <div class="todo-app">
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

<style></style>