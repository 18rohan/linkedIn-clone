import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Import Packages
import PostDiv from "./MakePostdiv.component";
import Post from "./PostDiv.component";
import PostModal from "./PostModal.component";
import { ModalContext } from "./ModalContext";
import { getArticlesAPI } from "../store/actions/actions.js";

const Main = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const currentUser = useSelector((state) => state.userState.user);
  const articles = useSelector((state) => state.articleState.articles);

  // console.log("ARTICLE STATUS: ", articleStatus);

  useEffect(() => {
    dispatch(getArticlesAPI());
    /* eslint-disable */
  }, []);
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Container>
        <PostDiv />
        {modal ? <PostModal /> : " "}

        {articles.map((article, key) => {
          console.log("MAIN COMPONENT: ", article);
          if (article.post.likes.includes(currentUser.uid)) {
            return (
              <Post
                key={key}
                liked={true}
                post={article.post}
                likesNumber={article.post.likes}
                post_id={article.id}
                currentUser={currentUser}
                user={article.post.actor.title}
                post_desc={article.description}
                user_image={article.post.actor.image}
                post_img={article.post.sharedImg}
                email={article.post.actor.description}
              />
            );
          } else {
            return (
              <Post
                key={key}
                liked={false}
                post={article.post}
                likesNumber={article.post.likes}
                post_id={article.id}
                currentUser={currentUser}
                user={article.post.actor.title}
                post_desc={article.description}
                user_image={article.post.actor.image}
                post_img={article.post.sharedImg}
                email={article.post.actor.description}
              />
            );
          }
        })}
      </Container>
    </ModalContext.Provider>
  );
};
const Container = styled.div`
  grid-area: main;
`;

export default Main;
