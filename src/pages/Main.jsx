import { Header } from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postsReducer";
import avatar from "../assests/img/ava.png";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Paginate } from "../components/pagination/Pagination";
import { useState } from "react";

export function MainPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("1");
  const [postsPerPage] = useState(10);

  const all = useSelector((state) => state.postsReducer.posts);
  console.log(all.length);
  const loading = useSelector((state) => state.loading.loading);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = all.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);
  console.log(currentPage);

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
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Поиск по заголовку"
          aria-label="Поиск по заголовку"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Найти
        </Button>
      </InputGroup>
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
        totalPosts={all.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
