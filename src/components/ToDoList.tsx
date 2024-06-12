import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToDoListProps, ToDo } from "../types/types";
import { DndContext, UniqueIdentifier } from "@dnd-kit/core";
import TaskColumn from "./TaskColumn";
import { DragEndEvent } from "@dnd-kit/core";
import { Header, Form, Input, Button, Board } from "../styles/styles";

const statusByColumn: any = {
  "To do": "to-do",
  "In progress": "in-progress",
  Done: "done",
};

const genSmallID = (): string => {
  return uuid().slice(0, 8);
};

const ToDoList = ({ todos: initialTodos }: ToDoListProps) => {
  const [todos, setTodos] = useState<ToDo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over !== null && over !== undefined) {
      const draggedTodoId: UniqueIdentifier = active.id;
      const droppedColumnTitle: UniqueIdentifier = over.id;
      setTodos(
        todos.map((todo) => {
          if (todo.id === draggedTodoId) {
            return {
              ...todo,
              status: statusByColumn[droppedColumnTitle],
            };
          } else {
            return todo;
          }
        })
      );
    }
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    const newItem: ToDo = {
      id: genSmallID(),
      title: newTodo,
      status: "to-do",
    };
    const updatedTodos: ToDo[] = [...todos, newItem];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header>To do list</Header>
      <Form onSubmit={handleAddTodo}>
        <Input
          type="text"
          name="newTodoText"
          placeholder="type in your todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button type="submit">Add todo</Button>
      </Form>
      <Board>
        <TaskColumn
          title="To do"
          todos={todos.filter((t) => t.status === "to-do")}
        />
        <TaskColumn
          title="In progress"
          todos={todos.filter((t) => t.status === "in-progress")}
        />
        <TaskColumn
          title="Done"
          todos={todos.filter((t) => t.status === "done")}
        />
      </Board>
    </DndContext>
  );
};

export default ToDoList;
