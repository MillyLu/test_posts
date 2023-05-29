import { Header } from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postsReducer";
import { useState } from "react";

export function MainPage() {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);

  const all = useSelector((state) => state.postsReducer.posts);

  return (
    <>
      <Header />
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        ПОЛУЧИТЬ posts
      </button>
      {all && all.map((post) => <div className="user">{post.title}</div>)}
    </>
  );
}
