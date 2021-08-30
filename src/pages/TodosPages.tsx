import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { Todo } from "../components/Interfaces";

// declare var confirm: (question: string) => boolean

export const TodosPage: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: Todo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const handleChecked = (id: number) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleRemove = (id: number) => {
    const shoudRemove = window.confirm("Вы уверены?");
    if (shoudRemove) {
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onChecked={handleChecked}
      />
    </>
  );
};
