import Todo from '../models/Todo.js';
import User from '../models/User.js';

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({ user: req.user }).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function addTodo(req, res) {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: 'Text is required' });

  try {
    // Create the new todo
    const newTodo = await Todo.create({
      text,
      user: req.user
    });

    // Increment the user's todo count
    await User.findByIdAndUpdate(req.user, { $inc: { todoCount: 1 } });

    res.status(201).json(newTodo);
  } catch (err) {
    console.error('Error in addTodo:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user },
      { text },
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function toggleTodo(req, res) {
  const { id } = req.params;

  try {
    const todo = await Todo.findOne({ _id: id, user: req.user });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}
