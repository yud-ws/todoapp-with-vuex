<template>
  <div class="todoitem">{{item}}</div>
</template>

<script>
export default {
  name: "todoitem",
  props: {
    item: String
  }
};
</script>

<style scoped>
.todoitem {
  padding: 0.5em 1em;
  margin: 1.3em 0;
  font-weight: bold;
  color: #6091d3; /*文字色*/
  background: #fff;
  border: solid 2px #6091d3; /*線*/
  border-radius: 10px; /*角の丸み*/
  text-align: center;
}
</style>
