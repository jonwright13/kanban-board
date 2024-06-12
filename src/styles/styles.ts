import styled from "styled-components";

export const Header = styled.h2`
  margin-left: 10px;
`;

export const Form = styled.form`
  margin: 10px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0px 12px;

  &:hover {
    filter: brightness(80%);
  }
`;

export const Board = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ColumnTitle = styled.h3``;

export const TodoContainer = styled.div``;

export const Column = styled.div<{
  $isOver: boolean;
}>`
  border: 1px solid white;
  padding: 0 10px 10px 10px;
  margin: 10px;
  min-width: 300px;
  background-color: ${(props) => (props.$isOver ? "lavender" : "transparent")};
  color: ${(props) => (props.$isOver ? "black" : "white")};
`;

export const Input = styled.input<{
  type: string;
  name: string;
  placeholder: string;
}>`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  text-transform: capitalize;
  color: black;
`;

export const TodoCard = styled.div<{
  $transformProp: string | undefined;
}>`
  border: 1px solid lightgray;
  padding: 10px;
  margin: 5px 0px;
  background-color: lightblue;
  color: black;
  transform: ${(props) => props.$transformProp};
  text-transform: capitalize;
  cursor: grab;

  &:focus {
    cursor: grabbing;
  }
`;
