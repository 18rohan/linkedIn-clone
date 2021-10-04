export const LikeaPost = (posts, newLike) => {
  const Alllikes = [];
  posts.map((post) => Alllikes.push(post.post.likes));

  const existingLike = Alllikes.find((like) => like === newLike);
  if (existingLike) {
    return Alllikes.map((like) =>
      like.id !== newLike
        ? [...like, ...newLike]
        : Alllikes.filter((like) => like.id !== newLike)
    );
  }
  return [...Alllikes, { ...newLike }];
};

// posts: Array of posts in the reducer
// newLike: newLike is a payload with user_id
