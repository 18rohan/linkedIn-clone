import styled from "styled-components";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaShare, FaPaperPlane } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";

const Post = () => {
  return (
    <Container>
      <FirstRow>
        <User>
          <img src="images/user.svg" alt="user" />
        </User>
        <Introduction>
          <h1>Rohan Sharma</h1>
          <p>Student at Indian Institute of Technology, Madras</p>
          <p>43 mins, 🌎</p>
        </Introduction>
      </FirstRow>

      <SecondRow>
        <img src="/images/user.svg" alt="user" />
      </SecondRow>
      <ThirdRow>
        <Icon>
          <img src="images/like.png" alt="like" />
          <img src="images/claps.png" alt="applause" />
          <p>3</p>
        </Icon>
        {/* <Icon>
          <img src="images/claps.png" alt="user" />
          <p>3</p>
        </Icon> */}
      </ThirdRow>
      <FourthRow>
        <Icon>
          <AiFillLike size={20} color="gray" />
          <p>Like</p>
        </Icon>

        <Icon>
          <BiCommentDots size={20} color="gray" />
          <p>Comment</p>
        </Icon>
        <Icon>
          <FaShare size={20} color="gray" />
          <p>share</p>
        </Icon>
        <Icon>
          <FaPaperPlane size={20} color="gray" />
          <p>Send</p>
        </Icon>
      </FourthRow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;

  margin-top: 30px;
  border-radius: 10px;
  padding: 10px;
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
  }
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  max-height: auto;
  img {
    max-width: 50%;
    max-height: 400px;
  }
`;

const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const FourthRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Introduction = styled.div`
  margin-left: 12px;
  width: 80%;
  border-radius: 24px;
  input {
    width: 96%;
    height: 90%;
    border-radius: 24px;
    padding-left: 12px;
    border: 0px;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
  h1 {
    font-size: 14px;
  }
`;
const Icon = styled.button`
  display: flex;
  flex-direction: row;

  background-color: transparent;
  border: 0px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 8px;
    font-weight: bold;
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 20px;
  }
`;

export default Post;
