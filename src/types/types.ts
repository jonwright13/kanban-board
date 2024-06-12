export interface ToDo {
  id: any;
  title: string;
  status: "to-do" | "in-progress" | "done";
}

export type ToDoList = ToDo[];

export interface ToDoListProps {
  todos: ToDo[];
}

export interface TaskColumnProps {
  title: string;
  todos: ToDoList;
}

export interface CardProps {
  todo: ToDo;
}
