import { Header } from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostsByPage } from "../store/postsReducer";
import avatar from "../assests/img/ava.png";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Search } from "../components/search/Search";
import { Paginate } from "../components/pagination/Pagination";
import { useEffect, useState } from "react";

export function MainPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("1");
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  const all = useSelector((state) => state.postsReducer.posts);
  const postsCount = useSelector((state) => state.postsReducer.postsCount);
  console.log(postsCount.length);
  console.log(all);
  const loading = useSelector((state) => state.loading.loading);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = all.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);
  console.log(currentPage);

  useEffect(() => {
    dispatch(fetchPosts())},
     [dispatch]);

     useEffect(() => {
      dispatch(fetchPostsByPage(currentPage, postsPerPage))},
       [dispatch, currentPage, postsPerPage]);   

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

      <Search setSearch={setSearch} setPostTitle={setPostTitle} />
      {loading === "true" && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {all &&
        currentPosts.map((post) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary">Загрузить комментарии</Button>
            </Card.Body>
          </Card>
        ))}
      <Paginate
        postsPerPage={postsPerPage}
        totalPostsCount={postsCount.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
