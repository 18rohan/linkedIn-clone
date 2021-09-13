import { useState } from "react";
import styled from "styled-components";
// Import Packages
import PostDiv from "./MakePostdiv.component";
import Post from "./PostDiv.component";
import PostModal from "./PostModal.component";
import { ModalContext } from "./ModalContext";

const Main = () => {
  const [modal, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Container>
        <PostDiv />
        {modal ? <PostModal /> : " "}
        <Post />
        <Post />
        <Post />
      </Container>
    </ModalContext.Provider>
  );
};
const Container = styled.div`
  grid-area: main;
`;

export default Main;
