<template>
  <div>
    <h2>ToDo app</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <Loader v-if="loading" />
    <ToDoList
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      v-else-if="todos.length"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 5000);
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    ToDoList,
    AddTodo,
    Loader,
  },
};
</script>
