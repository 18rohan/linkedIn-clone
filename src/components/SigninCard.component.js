import React from "react";
import styled from "styled-components";

const SigninCard = (props) => {
  return (
    <Container>
      <Heading>
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
      </Heading>

      <InputBox>
        <div>
          <p>Email</p>
        </div>
        <input placeholder="Enter your email" type="email" />
      </InputBox>
      <InputBox>
        <div>
          <p>Password</p>
        </div>
        <input placeholder="**********" type="Password" />
      </InputBox>
      <ForgotPassword>
        <p>Forgot Password ?</p>
      </ForgotPassword>
      <ButtonContainer>
        <SubmitButton>
          <p>Sign in </p>
        </SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  height: 380px;

  justify-content: flex-start;
  align-items: flex-start;

  padding: 24px 24px 0 24px;
  box-shadow: 8px 28px 8px 5px #d3d3d3;
`;
const InputBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 6px 12px 0px;
  p {
    text-align: left;
    padding-bottom: 4px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  input {
    width: 100%;
    padding: 12px 0 12px 8px;
    font-size: 16px;
    border-radius: 4px;

    border: 1px solid grey;
  }
`;
const Heading = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 24px 0 24px;
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
`;
const ForgotPassword = styled.div`
  padding: 4px 0 8px 0;
  p {
    font-weight: 600;
    color: #0a66c2;
  }
`;
const SubmitButton = styled.button`
  width: 90%;
  background-color: #0a66c2;
  height: 56px;
  border-radius: 35px;
  color: #ffffff;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
  &: hover {
    background-color: #004182;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SigninCard;
