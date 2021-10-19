import styled from "styled-components";

export const AddMoviePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddMovieForm = styled.form`
  width: 500px;
  border: 2px solid lightgray;
  padding: 10px 30px;
  border-radius: 5px;
  margin-bottom: 40px;

  .error {
    padding: 10px;
    background-color: tomato;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    display: none;

    &.active {
      display: block;
    }
  }

  div {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;

    label {
      margin: 10px 0;
      font-weight: bold;
      font-size: 0.9rem;
    }

    input[type="text"],
    input[type="number"] {
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

    input[type="file"] {
      display: none;
    }
    .custom_file_input {
      border: 2px solid lightgray;
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      i {
        color: royalblue;
        font-size: 2rem;
      }

      &:hover {
        border: 2px solid royalblue;
      }
    }
  }

  select {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    outline: none;
    border: 2px solid lightgray;
    border-radius: 5px;
  }

  button {
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: royalblue;
    color: white;
    font-weight: bold;
    cursor: pointer;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: #1d47c4;
    }
  }

  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const FormNav = styled.nav`
  margin: 30px 0;
  background-color: white;

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: tomato;
    color: white;
    font-weight: bold;
    cursor: pointer;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: #cc3d23;
    }
  }
`;
