import { useState, useLayoutEffect, useEffect} from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

// Import Packages
import PostDiv from "./MakePostdiv.component";
import Post from "./PostDiv.component";
import PostModal from "./PostModal.component";
import { ModalContext } from "./ModalContext";
import {getArticlesAPI} from '../store/actions/actions.js';

const Main = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const articleStatus = useSelector((state)=>state.articleState.loading);
  const articles = useSelector((state)=>state.articleState.articles);

  // console.log("ARTICLE STATUS: ", articleStatus);

  useEffect(()=>{
      dispatch(getArticlesAPI());
      console.log("RENDER ARTICLES: ", articles);
      console.log("ARTICLE STATUS: ", articleStatus);
  },[]);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>


      <Container>

        <PostDiv />
        {modal ? <PostModal /> : " "}

      {articles.map((article,key)=> <Post key={key} user={article.actor.title} post_desc={article.description} user_image={article.actor.image} post_img={article.sharedImg} email={article.actor.description}  />)}



      </Container>
    </ModalContext.Provider>
  );
};
const Container = styled.div`
  grid-area: main;
`;

export default Main;
