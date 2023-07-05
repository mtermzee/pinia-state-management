import { defineStore } from "pinia";

export const useTodoListStore = defineStore(
    "todoList",
    {
        // state
        state:()=>({
            todoList: [],
            id: 0
        }),
        // actions
        actions:{
            addTodo(item){
                //item.id = this.id++;
                this.todoList.push({
                    item,
                    id: this.id++,
                    completed: false
                });
            },
            removeTodoItem(itemId){
                this.todoList = this.todoList.filter(item => item.id !== itemId);
            }
        },
        // getters
        getters:{
            getTodoList(){
                return this.todoList;
            }
        }
    }
)