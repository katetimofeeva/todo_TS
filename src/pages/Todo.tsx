import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import Header from "../components/Header/index";
import List from "../components/TasksList/List/index";
import Footer from "../components/Footer/index";
import { getTodos } from "../Utils/Servise";
import { receiveTodos } from "../redux/selectors";
import { addTasksToList } from "../redux/actions";
import { TodoItem } from "../types/Types";

const Todo: React.FC = () => {
  const todos: Array<TodoItem> = useSelector(receiveTodos);

  const dispatch: any = useDispatch();
  useEffect(() => {
    getTodos().then((res) => {
      //@ts-ignore
      dispatch(addTasksToList(res.data));
    });
  }, []);

  return (
    <Root>
      <MainSection>
        <Header />
        <List />
      </MainSection>
      {todos.length === 0 ? "" : <Footer />}
    </Root>
  );
};

const Root = styled.div`
  font-style: italic;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #eaeaea;
  color: #4d4d4d;
  width: 550px;
  margin: 0 auto;
`;

const MainSection = styled.section`
  width: 555px;
  background: rgba(255, 255, 255, 0.9);
  margin: 130px 0 40px 0;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 15%);

  &::before {
    content: "";
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 45px;
    height: 100%;
    z-index: 2;
  }
`;

export default Todo;
