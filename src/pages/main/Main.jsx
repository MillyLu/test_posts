import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/postsReducer";
import Spinner from "react-bootstrap/Spinner";
import { Search } from "../../components/search/Search";
import { Paginate } from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { PostCard } from "../../components/postCard/PostCard";
import { Filter } from "../../components/filter/Filter";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import styles from "./main.module.css";

export function MainPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [search, setSearch] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [postsSorted, setPostsSorted] = useState([]);

  const all = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);

  const postsError = useSelector((state) => state.postsReducer.error);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = search
    ? all
    : postsSorted.length > 1
    ? postsSorted.slice(firstPostIndex, lastPostIndex)
    : all.length > 1
    ? all.slice(firstPostIndex, lastPostIndex)
    : [];

  useEffect(() => {
    if (sortAscending && all.length > 1) {
      const sorted = all.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
      setPostsSorted(sorted);
    }
    if (!sortAscending && all.length > 1) {
      const sorted = all.slice().sort((a, b) => (a.title > b.title ? -1 : 1));
      setPostsSorted(sorted);
    }
  }, [sortAscending, all]);

  useEffect(() => {
    dispatch(fetchPosts(postTitle));
  }, [dispatch, search, postTitle]);

  return (
    <>
      <Header />
      <Container>
        <Search setSearch={setSearch} setPostTitle={setPostTitle} />
        <Filter
          setSortAscending={setSortAscending}
          setPostsSorted={setPostsSorted}
        />
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <div className={styles.main_posts}>
          {all &&
            !loading &&
            currentPosts.map((post) => (
              <Col key={post.id}>
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                  postId={post.id}
                />
              </Col>
            ))}
        </div>
        <Paginate
          postsPerPage={postsPerPage}
          totalPostsCount={all.length}
          setCurrentPage={setCurrentPage}
        />

        {postsError && <p>{postsError.message}</p>}
      </Container>
    </>
  );
}
