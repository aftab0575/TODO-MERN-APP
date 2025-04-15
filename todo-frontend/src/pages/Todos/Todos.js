import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from "../../redux/todoSlice";
import "./Todos.scss";

const Todos = () => {
  const dispatch = useDispatch();
  const { items: todos, loading } = useSelector((state) => state.todos);

  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editingTodo._id, text: newTodo }));
    setNewTodo("");
    setEditingTodo(null);
  };

  return (
    <div className="todos-page" style={{ padding: "2rem" }}>
      <h2>Your Todos</h2>

      <div>
        <input
          type="text"
          placeholder="Write a todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {editingTodo ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button className='add-btn' onClick={handleAdd}>Add</button>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id} style={{ margin: "0.5rem 0" }}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => dispatch(toggleTodo(todo._id))}
              >
                {todo.text}
              </span>

              <button
                onClick={() => {
                  setNewTodo(todo.text);
                  setEditingTodo(todo);
                }}
              >
                Edit
              </button>

              <button onClick={() => dispatch(deleteTodo(todo._id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
