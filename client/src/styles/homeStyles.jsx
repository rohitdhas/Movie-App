import styled from "styled-components";

export const HomePage = styled.div`
  margin-top: 100px;
`;

export const AddBtn = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  margin: 0 200px;

  button {
    width: 100%;
    padding: 15px;
    margin: 20px 0;
    cursor: pointer;
    outline: none;
    color: white;
    background: #2358f8;
    border: none;
    border-radius: 5px;
    font-weight: bold;

    i {
      margin: 0 10px;
    }

    transition: 0.2s background;

    &:hover {
      background: #1943c2;
    }
  }

  @media (max-width: 750px) {
    margin: 0 20px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .label {
    font-weight: bold;
    font-size: 0.9rem;
    margin: 7px 0;

    i {
      margin: 0 10px;
    }
  }

  input {
    font-size: 1.2rem;
    padding: 10px;
    outline: none;
    border: 2px solid lightgray;
    transition: 0.1s border;
    border-radius: 5px;

    &:focus {
      border: 3px solid #6587ec;
    }
  }
`;
