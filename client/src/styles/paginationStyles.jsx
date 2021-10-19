import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border: 1px solid royalblue;
  border-radius: 5px;
`;

export const Number = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  border-left: 1px solid royalblue;
  border-right: 1px solid royalblue;

  a {
    text-decoration: none;
    color: black;
  }

  &.active {
    font-weight: bold;
    background-color: royalblue;
    a {
      color: white;
    }
  }

  &:hover {
    background-color: royalblue;
    a {
      color: white;
    }
  }
`;
