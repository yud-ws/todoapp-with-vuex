<template>
  <div class="todolist">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem :item="todo.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "todolist",
  components: {
    TodoItem
  },
  computed: mapState({
    todos: state => state.todos
  })
};
</script>

<style scoped>
.todolist {
  width: 90%;
  margin: auto;
  font-size: 1.5rem;
}

li {
  list-style: none;
}
</style>
