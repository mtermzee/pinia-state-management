import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  // state
  state: () => ({
    todoList: [],
    id: 0,
  }),
  // actions
  actions: {
    addTodoItem(item) {
      this.todoList.push({
        item,
        id: this.id++,
        completed: false,
      });
    },
    removeTodoItem(itemId) {
      this.todoList = this.todoList.filter((item) => item.id !== itemId);
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  // getters
  getters: {
    getTodoList() {
      return this.todoList;
    },
  },
});
