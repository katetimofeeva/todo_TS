import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import MainCheckbox from "../MainCheckbox/index";
import { PostTodo, createAsyncAction } from "../../../utils/redux";

const MainInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value.trim().length !== 0) {
      createAsyncAction(dispatch, PostTodo.request(value));
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
