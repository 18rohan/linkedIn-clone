import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import Packages
import WhiteCard from "./WhiteCard.component";

const RightSide = () => {
  const [scroller, setScroll] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 400) {
      return setScroll("");
    } else if (window.scrollY > 385) {
      return setScroll("fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <Container>
      <WhiteCard />
      <LinksTab position={scroller}>
        <Row>
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
        </Row>
        <Row>
          <p>Privacy & Terms</p>
          <p>Ad choices</p>
          <p>Advertising</p>
        </Row>
        <Row>
          <p>Business Services</p>
          <p>Get the LinkedIn app</p>
          <p>more</p>
        </Row>
        <Row>
          <img src="images/login-logo.svg" alt="linkedIn" />
          <h1>LinkedIn Corporation™ 2021</h1>
        </Row>
      </LinksTab>
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;

  width: 300px;
  right: 200px;
`;
const LinksTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 20px;
  position: ${(props) => props.position};
  top: 55px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 0 6px 0;
  p {
    color: grey;
    font-size: 13px;
    padding: 0 6px 0 7px;
  }
  img {
    width: 20%;
  }
  h1 {
    color: black;
    font-size: 13px;
    font-weight: 400;
    padding: 0 6px 0 7px;
  }
`;
export default RightSide;
