import React from "react";

import styled from "styled-components";

import MainInput from "./MainInput/index";

const Header: React.FC = () => {
  return (
    <>
      <HeaderTodos>
        <Logo>todos</Logo>
        <MainInput />
      </HeaderTodos>
    </>
  );
};

const HeaderTodos = styled.header`
  position: relative;
  height: 82px;
  text-align: center;
  padding-top: 15px;
  border-radius: inherit;
  border-bottom: 1px dotted #ccc;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 15px;
    z-index: 2;
    border-bottom: 1px solid #6c615c;
    background: -webkit-linear-gradient(
      top,
      rgba(115, 124, 156, 0.8),
      rgba(138, 151, 207, 0.8)
    );
  }
`;

const Logo = styled.h1`
  width: 100%;
  position: absolute;
  top: -60px;
  font-size: 70px;
  font-weight: bold;
  display: block;
  margin: 0 auto;
  color: #b3b3b3;
  color: rgba(255, 255, 255, 0.3);
  text-shadow: -1px -1px rgb(0 0 0 / 20%);
`;

export default Header;
