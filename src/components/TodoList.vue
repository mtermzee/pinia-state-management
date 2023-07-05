<template>
    <div v-for="todo in todoList" :key="todo.id" class="item">
        <div class="content">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
            <span @click="removeTodoItem(todo.id)" class="x">&#10060;</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/store/todoList";

export default defineComponent({
    name: "TodoList",
    components: {
    },
    setup() {
        const store = useTodoListStore();
        const { todoList } = storeToRefs(store);
        const { toggleCompleted, removeTodoItem } = store;

        // if i add in script "setup" i do not need to return
        return {
            todoList,
            toggleCompleted,
            removeTodoItem,
        };
    },
});
</script>

<style scoped>
span {
    margin: 0 10px;
    cursor: pointer;
}

.item {
    display: flex;
    justify-content: center;
}

.content {
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    width: 80vw;
    padding: 5px;
}

.completed {
    text-decoration: line-through;
}</style>