<template>
  <div class="todoinput">
    <input v-model="inputValue" type="text" placeholder="new todo" />
    <input type="button" value="add" v-on:click="addTodo({text:inputValue})" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todoinput",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"])
  }
};
</script>

<style scoped>
.todoinput {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.todoinput input[type="text"] {
  font: 15px sans-serif;
  box-sizing: border-box;
  width: 75%;
  padding: 0.3em;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #505050;
  border: 2px solid #93d3b9;
  border-radius: 4px;
}

.todoinput input[type="text"]:focus {
  border-color: 2px solid #7188f1;
  outline: 0;
  box-shadow: 0 0 5px 1px rgba(2, 68, 190, 0.5);
}

.todoinput input[type="button"] {
  font: 15px sans-serif;
  width: 20%;
  padding: 0.8em;
  color: #ec407a;
  background-color: #fff;
  border: 2px solid #ec407a;
  border-radius: 3px;
  transition: 0.4s;
  /* justify-content: end; */
}

.todoinput input[type="button"]:hover {
  background: #ec407a;
  color: #fff;
}
</style>
