<template>
  <div id="app">
    <Header />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  name: "app",
  components: {
    Header,
    TodoList,
    TodoInput
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}
button {
  font-family: "Poppins", sans-serif;
}

#app {
  width: 100%;
}
</style>
