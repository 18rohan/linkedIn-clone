import styled from "styled-components";

// Import Packages
import Sidebar from "./Sidebar.component";

const LeftSide = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;
  position: fixed;
  display: flex;
  padding-top: -120px;
  top: 100;
  padding-right: 80px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export default LeftSide;
