import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import Packages
import Sidebar from "./Sidebar.component";

const LeftSide = () => {
  const [scroller, setScroll] = useState(false);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setScroll(false);
    } else if (window.scrollY > 490) {
      return setScroll(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;

  display: flex;
  padding-top: -120px;
`;
export default LeftSide;
