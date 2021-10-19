import styled from "styled-components";

export const Player = styled.div`
  .back_btn {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: tomato;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 20px 0;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: #cc3d23;
    }
  }

  video {
    height: auto;
    width: 100%;
    margin: 0 auto;
    border-radius: 5px;
    margin: 20px 0;
    border: 2px solid lightgray;
  }

  .video_info {
    .name {
      font-size: 2rem;
      font-weight: bold;
    }
    .language,
    .category,
    .rating {
      font-size: 1.2rem;
      font-style: italic;
    }
  }

  .delete_btn {
    width: 100%;
    margin: 20px 0;
    padding: 15px;
    border: none;
    background-color: tomato;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-weight: bold;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: #d33f24;
    }
  }

  @media (max-width: 500px) {
    .video_info {
      .name {
        font-size: 1.5rem;
      }
    }
  }
`;
