<template>
  <div class="home">
    <TodoApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoApp from "@/components/TodoApp.vue";
export default defineComponent({
  name: "HomeView",
  components:
  {
    TodoApp,
  },
});
</script>
