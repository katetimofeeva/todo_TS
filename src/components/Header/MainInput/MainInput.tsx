import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { nanoid } from "nanoid";

import MainCheckbox from "../MainCheckbox/index";
// import { addTodo, getTodos } from "../../../Utils/Servise";
import { addTask } from "../../../redux/actions";

const MainInput = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim().length !== 0) {
      dispatch(
        addTask({
          description: value,
          id: nanoid(10),
          completed: false,
        })
      );

      // addTodo(value);
      // getTodos().then((res) => {
      //   dispatch(addTaskActionCreator(res.data));
      // });

      setValue("");
    }
  };

  return (
    <Root>
      <MainCheckbox />
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Whats need to be done?"
        autoComplete="off"
        autoFocus       
      />
    </Root>
  );
};

const Root = styled.div`
  width: 540px;
  height: 65px;
  display: flex;
  background-color: #fff;
`;

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  padding: 15px;
  outline: none;
`;

export default MainInput;
