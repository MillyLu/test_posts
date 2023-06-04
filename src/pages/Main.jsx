import { Header } from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostByTitle } from "../store/postsReducer";
import Spinner from "react-bootstrap/Spinner";
import { Search } from "../components/search/Search";
import { Paginate } from "../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { PostCard } from "../components/postCard/PostCard";
import { Filter } from "../components/filter/Filter";

export function MainPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("1");
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [sortAscending, setSortAscending] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);
  const [postsSorted, setPostsSorted] = useState([]);

  const all = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);

  console.log(all);
  console.log(loading);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    postsSorted.length > 1
      ? postsSorted.slice(firstPostIndex, lastPostIndex)
      : all.slice(firstPostIndex, lastPostIndex);

  console.log(currentPage);

  useEffect(() => {
    if (sortAscending) {
      const sorted = all.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
      setPostsSorted(sorted);
    }
    if (sortDescending) {
      const sorted = all.slice().sort((a, b) => (a.title > b.title ? -1 : 1));
      setPostsSorted(sorted);
    }
  }, [sortAscending, sortDescending, all]);

  useEffect(() => {
    if (search && postTitle) {
      dispatch(fetchPostByTitle(postTitle));
    } else {
      dispatch(fetchPosts());
    }
  }, [dispatch, search, postTitle]);

  console.log(postsSorted);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} setPostTitle={setPostTitle} />
      <Filter
        setSortAscending={setSortAscending}
        setSortDescending={setSortDescending}
        setPostsSorted={setPostsSorted}
      />
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {search &&
        all.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            postId={post.id}
          />
        ))}

      {all &&
        !search &&
        currentPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            postId={post.id}
          />
        ))}

      <Paginate
        postsPerPage={postsPerPage}
        totalPostsCount={all.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
