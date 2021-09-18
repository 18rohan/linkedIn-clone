import { useState, useContext } from "react";
import styled from "styled-components/";

// Import Component/packages
import { ModalContext } from "./ModalContext";
import ReactPlayer from "react-player";
import {useDispatch, useSelector} from 'react-redux';
import {postArticleAPI} from '../store/actions/actions';
import {Timestamp} from "firebase/firestore"

// Import icons
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiDocumentText } from "react-icons/hi";
import { BsFillBriefcaseFill, BsThreeDots } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { BiMessageRoundedDots } from "react-icons/bi";

const PostModal = (props) => {
  const dispatch = useDispatch();
  // Handling Modal Show/Hide State
  const modalState = useContext(ModalContext);
  // State for Handling TextArea value
  const [editorText, setEditorText] = useState("");
  // State for image upload values
  const [shareImage, setShareImage] = useState("");
  // State for Video Upload Values
  const [shareVideo, setShareVideo] = useState(false);

  //Get currentUser Details from Redux store
  const currentUser = useSelector((state)=>state.userState.user);

  // Handling Video show states
  const [showVideo, setShowVideo] = useState("");
  // Handle video show function
  const VideoShowHandler = () => {
    setShowVideo((currentState) => !currentState);
  };
  const ModalHandler = () => {
    modalState.setModal((currentState) => !currentState);
  };

  const ImageHandler = (e) => {
    const image = e.target.files[0];
    if (image === " " || image === undefined) {
      alert(`Image selected is of type ${typeof image}`);
      return;
    }
    setShareImage(image);
  };
// Handle Submit
  const postArticle = (e) =>{
    console.log("POST MALONE!!!")
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: shareVideo,
      user:  currentUser,
      description:  editorText,
      timestamp:Timestamp.now(),
    }
    dispatch(postArticleAPI(payload));
    ModalHandler();

  }
  return (
    <Container>
      <Content>
        <Header>
          <div>
            <p>Create a Post</p>
          </div>
          <CancelButton onClick={ModalHandler}>
            <MdCancel size={21} />
          </CancelButton>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="images/user.svg" alt="user" />
            <span>Name</span>
          </UserInfo>
        </SharedContent>

        <Editor>
          <textarea
            placeholder="What do you want to talk about?"
            autoFocus={true}
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
          />
          {showVideo ? (
            <VideoContainer>
              <p>
                <label
                  htmlFor="video"
                  style={{ fontWeight: "bold", textAlign: "left" }}
                >
                  Video URL:
                </label>
              </p>
              <input
                type="text"
                name="video"
                id="video"
                onChange={(e) => setShareVideo(e.target.value)}
                placeholder="Enter Video link"
                style={{
                  width: "80%",
                  height: "30px",
                  border: "1px solid #eeeeee",
                  paddingLeft: "4px",
                  marginLeft: "4px",
                }}
              />
            </VideoContainer>
          ) : (
            " "
          )}
          {shareImage && (
            <ImagePreview>
              <img
                src={URL.createObjectURL(shareImage)}
                alt="uploaded-"
                style={{ width: "100%", height: "auto" }}
              />
            </ImagePreview>
          )}

          {shareVideo && (
            <VideoPreview>
              <ReactPlayer url={shareVideo} with={"70%"} />
            </VideoPreview>
          )}
        </Editor>

        <LastRow>
          <MediaButtons>
            <Icon>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                name="image"
                id="file"
                style={{ display: "none" }}
                onChange={ImageHandler}
              />

              <label htmlFor="file">
                <HiOutlinePhotograph size={25} color="gray" />
                {/* Select an image */}
              </label>
            </Icon>

            <Icon onClick={VideoShowHandler}>
              <FaYoutube size={25} color="gray" />
            </Icon>
            <Icon>
              <HiDocumentText size={25} color="gray" />
            </Icon>
            <Icon>
              <BsFillBriefcaseFill size={23} color="gray" />
            </Icon>
            <Icon>
              <GiPartyPopper size={23} color="gray" />
            </Icon>
            <Icon>
              <GoGraph size={23} color="gray" />
            </Icon>
            <Icon>
              <BsThreeDots size={23} color="gray" />
            </Icon>
          </MediaButtons>
          <SubmitButtons>
            <Reach>
              <Icon>
                <BiMessageRoundedDots size={23} color="gray" />
                <p>Anyone</p>
              </Icon>
            </Reach>
            <Submit onClick={(event)=>postArticle(event)}>POST</Submit>
          </SubmitButtons>
        </LastRow>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 40px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 4px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  div > p {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const CancelButton = styled.button`
  padding: 2px;
  border: 0px;
  background-color: transparent;
`;
const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  width: 70%;
  height: 220px;
  padding: 1px;
`;

const VideoPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  width: 70%;
  height: 220px;
  padding: 12px;

  padding-bottom: 70px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  width: 90%;
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const Icon = styled.button`
  display: flex;
  flex-direction: row;
  height: 40px;
  background-color: transparent;
  border: 0px;
  margin-left: 2px;
  margin-right: 2px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eeeeee;
    color: white;
    border-radius: 12px;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 8px;
    font-weight: bold;
  }
  img {
    width: 15px;
    height: 25px;
  }
`;

const Editor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  textarea {
    width: 80%;
    height: 120px;
    border: 0px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const MediaButtons = styled.div`
  display: flex;
  width: 50%;
  padding-left: 20px;
  padding-right: 10px;
  height: 35px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-right: 0.5px solid rgba(0, 0, 0, 0.3);
`;
const LastRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const SubmitButtons = styled.div`
  display: flex;
  width: 50%;
  padding-right: 15px;
  padding-bottom: 12px;
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-right: 0.5px solid rgba(0, 0, 0, 0.3);
`;
const Reach = styled.a``;
const Submit = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 18px;
  border: 0px;
  background-color: #eeeeee;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;
export default PostModal;
