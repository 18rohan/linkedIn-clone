import { useState, useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// Import Components
import { ModalContext } from "./ModalContext";

const PostDiv = () => {
  const currentUser = useSelector((state) => state.userState.user);
  const modalState = useContext(ModalContext);
  const ModalHandler = () => {
    modalState.setModal((currentState) => !currentState);
  };
  return (
    <Container>
      <FirstRow>
        <User>
          {currentUser && currentUser.photoURL ? (
            <img src={currentUser.photoURL} alt="user" />
          ) : (
            <img src="images/user.svg" alt="user" />
          )}
        </User>
        <TextBox>
          <input
            type="text"
            placeholder="Start a post"
            onFocus={ModalHandler}
          />
        </TextBox>
        {/* <button onClick={ModalHandler}>Write</button> */}
      </FirstRow>

      <SecondRow>
        <Icon>
          <img src="images/gallery.png" alt="gallery" />
          <p>Photo</p>
        </Icon>

        <Icon>
          <img src="images/youtube.png" alt="video" />
          <p>Video</p>
        </Icon>
        <Icon>
          <img src="images/calendar.png" alt="calendar" />
          <p>Event</p>
        </Icon>
        <Icon>
          <img src="images/article.png" alt="article" />
          <p>Write article</p>
        </Icon>
      </SecondRow>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 98%;
  padding: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  animation: fadeIn 0.6s;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding-right: 0px;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Icon = styled.button`
  display: flex;
  flex-direction: row;
  height: 40px;
  background-color: transparent;
  border: 0px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 8px;
    font-weight: bold;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;
const TextBox = styled.div`
  margin-left: 12px;
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  input {
    width: 96%;
    height: 90%;
    border-radius: 24px;
    padding-left: 12px;
    border: 0px;
  }
`;

export default PostDiv;
