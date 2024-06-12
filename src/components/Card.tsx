import { CardProps } from "../types/types";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { TodoCard } from "../styles/styles";

const Card = ({ todo }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });

  return (
    <TodoCard
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      $transformProp={CSS.Translate.toString(transform)}
    >
      {todo.title}
    </TodoCard>
  );
};

export default Card;
