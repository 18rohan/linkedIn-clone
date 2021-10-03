import styled from "styled-components";

const WhiteCard = () => {
  return (
    <Container>
      <Heading>
        <p>LinkedIn News</p>
      </Heading>
      <ListWrap>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
        <ListItem>
          <p>Interviewers can call your bluff</p>
          <div>
            <p>23h ago . 6890 readers</p>
          </div>
        </ListItem>
      </ListWrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding-top: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  margin-left: 40px;
  width: 100;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const Heading = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  p {
    font-weight: bold;
  }
`;
const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  div > p {
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    font-size: 12px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export default WhiteCard;
