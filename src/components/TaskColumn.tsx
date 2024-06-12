import { TaskColumnProps } from "../types/types";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import { Column, ColumnTitle, TodoContainer } from "../styles/styles";

const TaskColumn = ({ title, todos }: TaskColumnProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <Column ref={setNodeRef} $isOver={isOver}>
      <ColumnTitle>{title}</ColumnTitle>
      <TodoContainer>
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </TodoContainer>
    </Column>
  );
};

export default TaskColumn;
