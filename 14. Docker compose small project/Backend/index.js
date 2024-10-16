const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./Models/Todo');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

const nodeEnv = process.env.NODE_ENV || 'development';

// Enabling CORS
app.use(cors());

// Enabling JSON parsing
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://database:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Create a new todo
app.post('/todos_create', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Get all todos
app.get('/todos', async (req, res) => {
  if (nodeEnv === 'production') {
      res.status(403).json({ message: 'This feature is not available in the production environment.' });
  } else {
      const todos = await Todo.find();
      res.json(todos);
  }
});


// Get a single todo by ID
app.get('/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

// Update a todo by ID
app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

// Delete a todo by ID
app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




