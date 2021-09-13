import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// Import Components
import LeftSide from "./LeftSide.component";
import RightSide from "./RightSide.component";
import Main from "./Main.component";

const Login = (props) => {
  const currentUser = useSelector((state) => state.userState.user);

  return (
    <Container>
      {!currentUser && <Redirect to="/" />}
      {/*Top "Hiring in a hurry" banner*/}
      <Section>
        <h5>
          <a>Hiring in a Hurry: </a>
        </h5>
        <p>
          Find talented pros in record time with UpWork and keep business
          moving.
        </p>
      </Section>

      {/*Main Grid Section of the feed*/}

      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  padding-left: 70px;
  padding-right: 70px;
  max-width: 100%;
  background-color: #eeeeee;
  @media (max-width: 768px) {
    padding-top: 25px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  min-height: 50px;
  width: 10 0%;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h5 {
    color: blue;
    text-decoration: underline;
  }
  p {
    font-weight: bold;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 768px) {
    display: none;

    p {
      text-align: center;
    }
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 15px;
  row-gap: 15px;
  grid-template-row: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default Login;
