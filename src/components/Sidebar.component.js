import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const [scroller, setScroll] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 400) {
      return setScroll("");
    } else if (window.scrollY > 370) {
      return setScroll("fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  const currentUser = useSelector((state) => state.userState.user);
  return (
    <Card>
      <NameSection>
        <User>
          {currentUser && currentUser.photoURL ? (
            <img src={currentUser.photoURL} alt="user" />
          ) : (
            <img src="images/photo.svg" alt="user" />
          )}
        </User>
        <div>
          {currentUser ? (
            <h1>Welcome, {currentUser.displayName.split(" ")[0]}</h1>
          ) : (
            <h1>Welcome, there!</h1>
          )}
        </div>
        <div>
          <p>Student at Indian Institute of Technology: Madras</p>
        </div>
      </NameSection>
      <Connection>
        <ConnectionsNo>
          <div>
            <p>Connections</p>
          </div>
          <div>
            <p>84</p>
          </div>
        </ConnectionsNo>
        <div>
          <h1>Grow your network</h1>
        </div>
      </Connection>
      <PremiumTool>
        <div>
          <h1>Access exclusive tools & insights</h1>
        </div>
        <div>
          <img src="images/item-icon.svg" alt="item-icon" />
          <p>Try Premium for free</p>
        </div>
      </PremiumTool>

      <CommunityCard position={scroller}>
        <div>
          <h1>Recent</h1>
        </div>
        <div>
          <p>Groups</p>
          <img src="images/plus-icon.svg" alt="plus-icon" />
        </div>
        <div>
          <p>Events</p>
          <img src="images/plus-icon.svg" alt="plus-icon" />
        </div>
        <div>
          <p>Follow Hashtags</p>
          <img src="images/plus-icon.svg" alt="plus-icon" />
        </div>
        <DiscoverMore>
          <h2>Discover More</h2>
        </DiscoverMore>
      </CommunityCard>
    </Card>
  );
};

const Card = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  align-items: center;
  border-radius: 50px;
  width: 320px;
  margin-top: 1px;
  margin-bottom: 1px;
  padding: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NameSection = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-image: url("images/card-bg.svg");
  background-size: contain;

  background-size: 220px 50px;
  background-repeat: no-repeat;
  height: 120px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  h1 {
    font-weight: bold;
    padding-top: 14px;
  }
  p {
    font-weight: 10px;
    color: rgba(0, 0, 0, 0.6);
    padding-bottom: 5px;
    font-size: 14px;
    text-align: center;
    padding-top: 5px;
  }
`;

const PremiumTool = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5px;
  padding-bottom: 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  & div {
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  & div h1 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
  & div p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    font-weight: bold;
  }
  h1 {
    font-weight: bold;
    padding-top: 14px;
  }
`;
const Connection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-bottom: 15px;

  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  p {
    font-size: 12px;
  }
  & div {
    padding-left: 4px;
  }
  & div > h1 {
    padding-left: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0);
  }
`;

const ConnectionsNo = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;

  padding-right: 4px;
  justify-content: space-between;
  & div > p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-weight: bold;
  }
  & div > h1 {
    color: blue;
    font-size: 12px;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 2px;
  border-radius: 50%;
  margin-top: 15px;

  padding-right: 0px;

  img {
    padding: 2px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  top: 50px;
  position: ${(props) => props.position};
  border-radius: 10px;
  width: 250px;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    padding-top: 45px;
    padding: 5px;
  }
  & div > p {
    font-size: 15px;
    color: #2d46b9;
    font-weight: 400;
  }
  & div > h1 {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 700;
  }
`;

const DiscoverMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  h2 {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    font-size: 14px;
  }
`;

export default Sidebar;
