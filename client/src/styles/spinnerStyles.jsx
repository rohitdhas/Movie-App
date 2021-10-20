import styled from "styled-components";

export const LoaderBox = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #status_info {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 20px 0;
  }

  &.active {
    display: flex;
  }
`;

export const Loader = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 4px solid lightgray;
  border-top: 4px solid royalblue;
  animation: spinner 0.7s infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SearchSpinnerBox = styled.div`
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #f7f4f4;
  border-radius: 5px;

  &.active {
    display: flex;
  }
`;
