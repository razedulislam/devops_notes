<template>
  <div>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-else class="container">
      <div class="todo-container">
        <div class="todo-list">
          <h1>Todo List</h1>
          <div class="todo-form">
            <input class="todo-input" v-model="newTodo.title" placeholder="Add new todo title" />
            <input class="todo-input" v-model="newTodo.description" placeholder="Add description" />
            <input type="checkbox" v-model="newTodo.completed" /> Completed
            <input type="date" v-model="newTodo.dueDate" />
            <button class="btn btn-add" @click="addTodo">Add Todo</button>
          </div>
        </div>
      </div>

      <div class="todo-items">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo._id">
            <td>{{ todo.title }}</td>
            <td>{{ todo.description }}</td>
            <td v-if="todo.dueDate">{{ new Date(todo.dueDate).toLocaleDateString() }}</td>
            <td v-else>Not Set</td>
            <td>
              <span v-if="todo.completed">Completed</span>
              <span v-else>Incomplete</span>
            </td>
            <td>
              <div class="btn-update-delete">
                <button class="btn btn-update" @click="updateTodo(todo)" title="delete">&#128394;</button>
                <button class="btn btn-delete" @click="deleteTodo(todo._id)" title="edit">&#9003;</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div> 
  </div>
</template>


<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const todos = ref([]);
  const newTodo = ref({
    title: '',
    description: '',
    completed: false,
    dueDate: null
  });
  const error = ref();

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      todos.value = response.data;
    } catch (err) { 
      error.value = err.response?.data?.message || "An error occurred while fetching todos.";
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post('http://localhost:3000/todos_create', newTodo.value);
      todos.value.push(response.data);
      newTodo.value = {
        title: '',
        description: '',
        completed: false,
        dueDate: null
      };
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred while adding the todo.";
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      todos.value = todos.value.filter(todo => todo._id !== id);
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred while deleting the todo.";
    }
  };

  const updateTodo = async (todo) => {
    try {
      const newTitle = prompt('Update todo title:', todo.title);
      const newDescription = prompt('Update todo description:', todo.description);
      const newDueDate = prompt('Update todo due date:', todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '');
      const newCompleted = confirm('Is the todo completed? Click "OK" for Yes and "Cancel" for No.');

      const updatedTodo = {
        ...todo,
        title: newTitle !== null ? newTitle : todo.title,
        description: newDescription !== null ? newDescription : todo.description,
        dueDate: newDueDate !== null ? new Date(newDueDate).toISOString() : todo.dueDate,
        completed: newCompleted
      };

      const response = await axios.put(`http://localhost:3000/todos/${todo._id}`, updatedTodo);
      const index = todos.value.findIndex(t => t._id === todo._id);
      todos.value[index] = response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "An error occurred while updating the todo.";
    }
  };

  fetchTodos();
</script>

<style scoped>
  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 20px;
  }
</style>
