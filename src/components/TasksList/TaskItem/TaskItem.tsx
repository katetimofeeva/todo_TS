import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import {
  deleteTask,
  toggleTask,
  editTask,
  setMarker,
} from "../../../redux/actions";

import { receiveTodos, receiveMarker } from "../../../redux/selectors";
import { TodoItem } from "../../../types/Types";

interface ItemProps {
  item: TodoItem;
}

const TaskItem: React.FC<ItemProps> = ({ item }) => {
  const [activeEdit, setActiveEdit] = useState(true);
  const [value, setValue] = useState(item.description);

  const dispatch = useDispatch();
  const todos: TodoItem[] = useSelector(receiveTodos);
  const marker: string = useSelector(receiveMarker);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const completedTask = (): void => {
    dispatch(toggleTask(item._id, item.completed));
  };

  const handleDeleteTask = (): void => {
    dispatch(deleteTask(item._id));

    if (marker === "completed" && todos.length) {
      dispatch(setMarker("all"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.length) {
      dispatch(editTask(item._id, value));
      setActiveEdit(true);
    } else if (e.key === "Enter" && !value.length) {
      dispatch(deleteTask(item._id));
      setActiveEdit(true);
    }
  };

  const handleBlur = (): void => {
    if (value.length) {
      dispatch(editTask(item._id, value));
      setActiveEdit(true);
    } else {
      dispatch(deleteTask(item._id));
    }
    setActiveEdit(true);
  };

  const description: string = item.description.slice(0, 30);

  return (
    <Root>
      <Wrapper>
        <div>
          <StyledCheckbox
            type="checkbox"
            checked={item.completed}
            id={item._id}
            onChange={completedTask}
          />
          <StyledLabel
            activeEdit={activeEdit}
            completed={item.completed}
            onClick={completedTask}
          ></StyledLabel>
        </div>
        {activeEdit ? (
          <ItemTask
            onDoubleClick={() => setActiveEdit(false)}
            completed={item.completed}
          >
            {description}
          </ItemTask>
        ) : (
          <StyledInput
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        )}
        {activeEdit && (
          <div>
            <DeleteButton className="delete" onClick={handleDeleteTask}>
              ✖
            </DeleteButton>
          </div>
        )}
      </Wrapper>
    </Root>
  );
};

const StyledInput = styled.input`
  display: block;
  width: 490px;
  position: absolute;
  right: 5px;
  bottom: 2px;
  height: 60px;
  font-size: 24px;
  color: #4d4d4d;
  padding: 18px 15px;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
`;

const ItemTask = styled.div<{ completed: boolean }>`
  position: relative;
  width: 500px;
  background-color: #fff;
  margin-left: 20px;
  padding: 18px 15px;
  font-size: 24px;
  color: ${({ completed }) =>
    completed ? "rgb(169, 169, 169)" : "rgb(77, 77, 77)"};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

const Root = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: none;
  position: relative;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;

  &:hover .delete {
    display: block;
  }
`;

const Wrapper = styled.div`
  width: 510px;
  height: 65px;
  display: flex;
  background-color: #fff;
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ completed: boolean; activeEdit: boolean }>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  background-color: #fff;
  white-space: pre;
  word-break: break-word;
  display: block;
  line-height: 1.2;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;

  &::before {
    content: "✔";
    cursor: pointer;
    line-height: 43px;
    font-size: 20px;
    display: ${({ activeEdit }) => (activeEdit ? "inline-block" : "none")};
    padding-top: 10px;
    padding-left: 15px;
    color: ${({ completed }) => (completed ? "#85ada7" : "#d9d9d9")};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    text-shadow: ${({ completed }) => (completed ? "0 1px 0 #669991" : "")};
    bottom: ${(completed) => (completed ? "1px" : "")};
  }
`;

const DeleteButton = styled.button`
  display: none;
  content: "✖";
  border: none;
  position: absolute;
  right: 10px;
  top: 12px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 22px;
  background-color: #fff;
  color: #a88a8a;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 1px #000, 0 0 10px rgb(199 107 107 / 80%);
    transform: scale(1.3);
  }
`;
export default TaskItem;
