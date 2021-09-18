import {useState} from 'react';
import styled from "styled-components";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaShare, FaPaperPlane } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import {AiOutlineLike} from "react-icons/ai";
import {useDispatch} from 'react-redux';

const Post = (props) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const dispatch = useDispatch();
  const HandleLike = (likeStatus) =>{
    setLikeStatus((currentStatus)=>!currentStatus);
  }
  return (
    <Container>
      <FirstRow>
        <User >
          <img src={props.user_image} alt="user" />
        </User>
        <Introduction>
          <h1>{props.user}</h1>
          <p>{props.email}</p>
          <p>45 mins ago, 🌎</p>
        </Introduction>
      </FirstRow>

      <SecondRow >
        <img src={props.post_img} alt="post" />
        <DescRow><p>{props.post_desc}</p></DescRow>
      </SecondRow>
      <ThirdRow>
        <SocialCounts>
          {/* <AiOutlineLike size={22} />
          <AiFillLike size={22} /> */}
          <img src="images/like.png" alt="like" />
          <img src="images/claps.png" alt="applause" />
          <p style={{paddingLeft:"7px, fontWeight:bold"}}>3</p>
        </SocialCounts>
        {/* <Icon>
          <img src="images/claps.png" alt="user" />
          <p>3</p>
        </Icon> */}
      </ThirdRow>
      <FourthRow>

        <Icon onClick={()=>{
          HandleLike()
          // dispatch(likepost())
        }}>
          {!likeStatus ? (<AiOutlineLike size={20} color="gray" />) :
            <AiFillLike size={20} color="blue" />}

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
        {/* <Icon>
          <FaPaperPlane size={20} color="gray" />
          <p>Send</p>
        </Icon> */}
      </FourthRow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;

  margin-top: 30px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom:10px;
`;
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left:10px;
  padding-bottom: 10px;
  padding-top:10px;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40px;
  max-height: 40px;
  padding-right: 0px;

  img {
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
  }
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  max-height: auto;
  img {
    max-width: 100%;
    max-height: 400px;
  }
`;

const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top:10px;
  padding-bottom:5px;
  padding-left: 10px;
`;
const FourthRow = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom:15px;
  padding-left: 5px;
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
  cursor: pointer;

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
const SocialCounts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width:30px;
    height:30px;

  }

`;

const DescRow = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction:  column;
  justify-content: center;
  align-items: flex-start;
  width:100%;
  padding-left:10px;
  padding-top:15px;
  p {
    font-size:14px;
  }
`

export default Post;
