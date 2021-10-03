import styled from "styled-components";

// Import Packages
import WhiteCard from "./WhiteCard.component";

const RightSide = () => {
  return (
    <Container>
      <WhiteCard />
    </Container>
  );
};
const Container = styled.div`
  grid-area: rightside;
  position: fixed;
  width: 20%;
  right: 200px;
`;
export default RightSide;
