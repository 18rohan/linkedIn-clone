import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signoutAPI } from "../store/actions/actions";
import styled from "styled-components";

const Header = () => {
  const currentUser = useSelector((state) => state.userState.user);
  const [SignoutButton, setSignoutButton] = useState(false);
  const HandleSignOutDropdown = (SignoutButton) =>{
    setSignoutButton((currentStatus) => !currentStatus);
  }
  const dispatch = useDispatch();
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="images/home-logo.svg" alt="linkedIn Logo" />
            <p> </p>
          </a>
        </Logo>
        <Search>
          <SearchIcon>
            <img src="images/search-icon.svg" alt="linkedIn Search" />
          </SearchIcon>
          <input type="text" placeholder="Search" />
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="home">
                <img src="images/nav-home.svg" alt="home" />
              </a>
            </NavList>

            <NavList>
              <a href="network">
                <img src="images/nav-network.svg" alt="netwok" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a href="Jobs">
                <img src="images/nav-jobs.svg" alt="jobs" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a href="messaging">
                <img src="images/nav-messaging.svg" alt="messaging" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a href="notifications">
                <img src="images/nav-notifications.svg" alt="notifications" />
                <span>Notifications</span>
              </a>
            </NavList>

            <NavList>
              <a  >
                <User>
                  {currentUser && currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="user" />
                  ) : (
                    <img src="images/user.svg" alt="user" />
                  )}
                  <DropDown onClick={HandleSignOutDropdown}><span>Me▼</span></DropDown>
                </User>
              </a>


            </NavList>
            {SignoutButton ? (<Signout onClick={() => dispatch(signoutAPI())}>
              <p>Signout</p>
            </Signout>) : '' }

            <NavList>
              <Work>
                <a href="work">
                  <img src="images/nav-work.svg" alt="work" />
                  <span>Work</span>
                </a>
              </Work>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 10px 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  width: 35%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0px 5px 5px;
  color: rgba(0, 0, 0, 0.8);
  background-color: #eeeeee;
  input {
    background-color: transparent;
    border: 0px;
    width: 100%;

    height: 100%;
    padding-left: 5px;
    padding-top: 2px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const SearchIcon = styled.div`
  padding-left: 5px;
  padding-top: 3px;
  padding-right: 5px;
  pointer-events: none;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const DropDown = styled.button`
  border:none;
  background-color:white;
  cursor: pointer;
`
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 100;
    justify-content: center;
    line-height: 1;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }
  span {
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    font-weight: 400;
  }
`;

const NavIcons = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 20px;
    margin-right: 20px;
    width: 20px;
  }
`;
const Signout = styled.button`
  position:fixed;
  top: 68px;
  right:170px;
  border: 0px;
  padding: 15px;
  background: lightblue;

  p {
    font-size: 12px;
    font-weight: bold;

  }
  &:hover {
    color: red;
  }
`;

const User = styled(NavList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding-right: 0px;

  img {
    border-radius: 50%;
    height: 25px;
    width: 25px;
  }
  &:hover {
    ${Signout} {
      position: absolute;
      top: 65px;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid #ccc;
  padding-left: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 0px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 20px;
  }
`;
const NavButton = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
  }
`;
const Signin = styled.a`
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;

export default Header;
