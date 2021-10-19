import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: 1px solid lightgray;
  border-radius: 5px;

  .thumbnail {
    height: 150px;
    width: 200px;
    margin-right: 40px;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      position: absolute;
      z-index: -1;
    }
    &::after {
      content: "";
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
      background-color: lightgray;
    }
  }
  .movie_info {
    .name {
      font-weight: bold;
    }
    .language,
    .category {
      font-style: italic;
    }
  }

  &:hover {
    cursor: pointer;
    border: 1px solid royalblue;
  }

  @media (max-width: 500px) {
    .thumbnail {
      width: 150px;
    }

    .movie_info {
      font-size: 0.8rem;
    }
  }
`;
