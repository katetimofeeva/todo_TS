import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import FilterTasks from "./FilterTasks/FilterTasks";
import { StyledForAllButton } from "../ui/Button"
import { deleteAllTaskActionCreator, setMarkerActionCreator } from "../../redux/actions";
import { receiveMarker, receiveTodos } from "../../redux/selectors"
// import { deleteAllTasks, getTodos} from '../../Utils/Servise'

import {TodoItem} from '../../types/Types'
const Footer = () => {
  const todos: TodoItem[] = useSelector(receiveTodos);
  
  const marker: string = useSelector(receiveMarker);
  const dispatch = useDispatch();
  const countActive = todos.filter((item:TodoItem) => !item.completed).length;
  const countCompleted = todos.filter((item: TodoItem) => item.completed).length;

  const clearCompletedAll = () => {
    dispatch(deleteAllTaskActionCreator(todos) );
    // deleteAllTasks() 
    // getTodos().then((res) => {
    //   dispatch(deleteAllTaskActionCreator(res.data) );
    // });
    if (marker === "completed" && todos.length) {
      dispatch(setMarkerActionCreator("all") );
    }
  };

  return (
    <Root>
      <StyledSpan>
        <strong>{countActive} </strong>items left
      </StyledSpan>
      <FooterButtons>
        <FilterTasks />
      </FooterButtons>
      {todos.some((item) => item.completed) ? (
        <ButtonClearCompleted onClick={clearCompletedAll}>
          Clear completed (<strong>{countCompleted}</strong>)
        </ButtonClearCompleted>
      ) : (
        ""
      )}
    </Root>
  );
};

const Root = styled.footer`
  width: 550px;
  height: 20px;
  color: #777;
  padding: 0 15px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;

    left: 0;
    height: 40px;
    top: -70px;
    z-index: 0;
    box-shadow: 0 1px 1px rgb(0 0 0 / 30%), 0 6px 0 -3px rgb(255 255 255 / 80%),
      0 7px 1px -3px rgb(0 0 0 / 30%), 0 43px 0 -6px rgb(255 255 255 / 80%),
      0 44px 2px -6px rgb(0 0 0 / 20%);
    /* content: "";
    top: -330%;
    position: absolute;
    right: 0;
    bottom: 31px;
    left: 0;
    height: 30px;
    z-index: 0;
    box-shadow: 0 3px 1px rgb(0 0 0 / 30%), 0 2px 0 -3px rgb(255 255 255 / 80%),
      0 1px 1px -3px rgb(0 0 0 / 30%), 0 36px 0 -2px rgb(255 255 255 / 80%),
      0 44px 2px -6px rgb(0 0 0 / 20%); */
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 10px;
  top: -100%;
`;

const FooterButtons = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 0;
  left: 0;
  padding-left: 200px;
  top: -100%;
`;
//наследование
const ButtonClearCompleted = styled(StyledForAllButton)`
  position: absolute;
  right: 10px;
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.1);
  font-size: 11px;
  padding: 0 10px;
  border-radius: 3px;
  box-shadow: 0 -1px 0 0 rgb(0 0 0 / 20%);
  top: -100%;
`;
export default Footer;
