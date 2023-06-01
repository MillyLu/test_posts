import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser } from "../store/userReducer";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { PostCard } from "../components/postCard/PostCard";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export function UserInfoPage() {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.user);
  const comments = useSelector((state) => state.userReducer.comments);
  console.log(user);
  console.log(comments);

  useEffect(() => {
    dispatch(fetchUser(Number(params.id)));
  }, [dispatch, params]);

  return (
    <>
    <Button onClick={() => navigate(-1)} variant="secondary">Назад</Button>{' '}
    
      {user.map((userItem) => (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{userItem.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          name: {userItem.name}
        </Card.Subtitle>
        <Card.Text>website: {userItem.website}</Card.Text>
      </Card.Body>
    </Card>
  ))}
  {comments &&
    comments.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        userId={post.userId}
        postId={post.id}
      />
    ))}</>
  
  )
}
