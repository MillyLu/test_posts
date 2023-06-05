import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../store/userReducer";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { PostCard } from "../components/postCard/PostCard";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'

export function UserInfoPage() {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.user);
  const comments = useSelector((state) => state.userReducer.comments);
  const loading = useSelector((state) => state.userReducer.loading);

  console.log(user);
  console.log(comments);

  useEffect(() => {
    dispatch(fetchUser(Number(params.id)));
  }, [dispatch, params]);

  return (
    <>
    <Container>
    <Button onClick={() => navigate(-1)} style={{marginBottom: "30px"}}variant="secondary">
        Назад
      </Button>{" "}
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <h2>Информация о пользователе <Badge bg="secondary">Info</Badge>:</h2>
      {user.map((userItem) => (
        <Card  style={{ width: "20rem", marginBottom: "20px"}}>
          <Card.Body>
            <Card.Title>Nickname: {userItem.username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              name: {userItem.name}
            </Card.Subtitle>
            <Card.Text >website: {userItem.website}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <h3 style={{marginBottom: "20px"}}>Список постов пользователя:</h3>
      {comments &&
        comments.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            postId={post.id}
          />
        ))}
    </Container>
     
    </>
  );
}
