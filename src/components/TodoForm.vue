<!-- components/TodoForm.vue -->
<template>
    <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text" />
        <button type="submit">Add</button>
    </form>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodoListStore } from "@/store/todoList";

export default defineComponent({
    name: "TodoForm",
    setup() {
        const todo = ref("");
        const store = useTodoListStore();

        const addItemAndClear = (item: any) => {
            if (item.length === 0) {
                return;
            }
            store.addTodoItem(item);
            todo.value = "";
        };

        return {
            todo,
            addItemAndClear,
        };
    },
});
</script>
  
<style></style>
  