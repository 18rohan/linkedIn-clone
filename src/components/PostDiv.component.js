import React, { useState } from "react";

import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { LikePost, setLikes, UnlikePost } from "../store/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

const Post = (props) => {
  const dispatch = useDispatch();
  const [likeStatus, setLikeStatus] = useState(props.liked);
  const likesNumber = useSelector((state) => state.articleState.likes);
  const [commentsDropdown, setCommentsDropdown] = useState(false);
  const HandleComments = (commentsDropdown) => {
    setCommentsDropdown((currentStatus) => !currentStatus);
  };

  // Number of likes
  const post_likes = [];
  var likes = props.likesNumber;
  likes.map((like) => post_likes.push(like));
  // dispatch(setLikes(post_likes));
  const [postLikes, setPostLikes] = useState(post_likes.length);
  const HandleUnlike = (likeStatus, postLikes) => {
    setPostLikes((currentLikes) => currentLikes - 1);
    dispatch(
      UnlikePost({
        user_id: props.currentUser.uid,
        post: props.post,
        post_id: props.post_id,
      })
    );
  };
  const HandleLike = (likeStatus, postLikes) => {
    setPostLikes((currentLikes) => currentLikes + 1);
    dispatch(
      LikePost({
        user_id: props.currentUser.uid,
        post: props.post,
        post_id: props.post_id,
      })
    );
  };

  return (
    <Container>
      <FirstRow>
        <User>
          <img src={props.user_image} alt="user" />
        </User>
        <Introduction>
          <h1>{props.user}</h1>
          <p>{props.email}</p>
          <p>45 mins ago, 🌎</p>
        </Introduction>
      </FirstRow>

      <SecondRow>
        <img src={props.post_img} alt="post" />
        <DescRow>
          <p>{props.post_desc}</p>
        </DescRow>
      </SecondRow>
      <ThirdRow>
        <SocialCounts>
          {/* <AiOutlineLike size={22} />
          <AiFillLike size={22} /> */}
          <img src="images/like.png" alt="like" />
          <img src="images/claps.png" alt="applause" />
          <p style={{ paddingLeft: "7px, fontWeight:bold" }}>{postLikes}</p>
        </SocialCounts>
        {/* <Icon>
          <img src="images/claps.png" alt="user" />
          <p>3</p>
        </Icon> */}
      </ThirdRow>
      <FourthRow>
        <Icon
          onClick={() => {
            setLikeStatus((currentStatus) => !currentStatus);
            if (!likeStatus) {
              HandleLike();
            } else if (likeStatus) {
              HandleUnlike();
            }
          }}
        >
          {likeStatus && props.liked === true ? (
            <AiFillLike size={20} color="blue" />
          ) : (
            <AiOutlineLike size={20} color="gray" />
          )}

          <p>Like</p>
        </Icon>

        <Icon onClick={HandleComments}>
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
      {commentsDropdown ? (
        <CommentsSection>
          <CommentsFirstRow>
            <CommentUser>
              <img src="images/user.svg" alt="user" />
            </CommentUser>
            <TextBox>
              <input type="text" placeholder="Start a post" />
            </TextBox>
            {/* <button onClick={ModalHandler}>Write</button> */}
          </CommentsFirstRow>
          <SingleComment>
            <CommentUser>
              <img src="images/user.svg" alt="user" />
            </CommentUser>
            <Comment>
              <Name>
                <p>Rohan Sharma</p>
              </Name>
              <NameHeading>
                <p>SDE-3 | Google | IIT-M </p>
              </NameHeading>
              <CommentContent>Woww! Thats great!</CommentContent>
            </Comment>
          </SingleComment>
          <SingleComment>
            <CommentUser>
              <img src="images/user.svg" alt="user" />
            </CommentUser>
            <Comment>
              <Name>
                <p>Rohan Sharma</p>
              </Name>
              <NameHeading>
                <p>SDE-3 | Google | IIT-M </p>
              </NameHeading>
              <CommentContent>Woww! Thats great!</CommentContent>
            </Comment>
          </SingleComment>
        </CommentsSection>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;

  margin-top: 30px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
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
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
`;
const FourthRow = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 15px;
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
    width: 30px;
    height: 30px;
  }
`;

const DescRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 10px;
  padding-top: 15px;
  p {
    font-size: 14px;
  }
`;
const CommentsSection = styled.div`
  width: 100%;
  background-color: #ffffff;
`;
const CommentsFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  padding: 8px 8px 8px 8px;
`;
const TextBox = styled.div`
  margin-left: 12px;
  width: 85%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 24px;

  input {
    width: 96%;
    height: 90%;
    border-radius: 24px;
    padding-left: 12px;
    border: 0px;
    border: 1px solid transparent;
    &:focus {
      border: 1px solid transparent;
    }
  }
`;
const CommentUser = styled.div`
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
const SingleComment = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  padding: 10px 8px 10px 8px;
  width: 90%;
`;
const Comment = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  border-radius: 4px;
  margin: 6px 5px 6px 5px;
`;
const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 0px 3px 6px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
`;
const NameHeading = styled.div`
  padding: 1px 0px 6px 6px;
  p {
    color: grey;
    font-size: 12px;
    font-weight: 400;
  }
`;
const CommentContent = styled.div`
  padding: 8px 6px 15px 6px;
  p {
    font-size: 14px;
  }
`;
export default Post;
