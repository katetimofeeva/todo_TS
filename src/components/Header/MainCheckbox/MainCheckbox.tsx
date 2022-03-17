import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { completedAllTasks } from "../../../redux/actions";
import { receiveTodos } from "../../../redux/selectors";
import { TodoItem } from "../../../types/Types";

const MainCheckbox = () => {
  const todosLength: number = useSelector(receiveTodos).length;
  const todos: TodoItem[] = useSelector(receiveTodos);
  const dispatch = useDispatch();

  let isAllCompleted: boolean = false;

  todosLength === 0
    ? (isAllCompleted = false)
    : (isAllCompleted = todos.every((item: TodoItem) => item.completed));

  const handleToggleAllTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(completedAllTasks(isAllCompleted));
  };

  return (
    <>
      <StyledInput
        type="checkbox"
        id="input_header_check"
        checked={isAllCompleted}
        onChange={handleToggleAllTasks}
      />
      <Label htmlFor="input_header_check" visible={!todosLength}>
        <Span checked={isAllCompleted}>»</Span>
      </Label>
    </>
  );
};

interface SpanProps {
  checked: boolean;
}

interface LabelProps {
  visible: boolean;
}

const StyledInput = styled.input`
  font-size: 2em;
  outline: none;
  border: none;
  display: none;
`;

const Label = styled.label<LabelProps>`
  display: block;
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  visibility: ${({ visible }) => (visible ? "hidden" : "visible")};
`;

const Span = styled.span<SpanProps>`
  font-size: 28px;
  color: ${({ checked }) => (checked ? " #737373" : "#d9d9d9")};
  padding: 0 17px;
  transform: rotate(90deg);
`;

export default MainCheckbox;
