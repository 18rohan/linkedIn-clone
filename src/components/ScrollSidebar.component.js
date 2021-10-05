import React from "react";
import styled from "styled-components";

const ScrollSidebar = (props) => {
  return (
    <CommunityCard>
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
  );
};

const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -50px;
  position: fixed;
  border-radius: 10px;
  width: 250px;
  height: 300px;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    padding-top: 15px;
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

export default ScrollSidebar;
