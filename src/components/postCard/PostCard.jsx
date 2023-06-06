import { fetchComments } from "../../store/commentReducer";
import avatar from "../../assests/img/ava.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


export function PostCard(props) {
  const [openComments, setOpenComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);
  const commentsLoading = useSelector((state) => state.commentReducer.loading);
  const commentsError = useSelector((state) => state.commentReducer.error);


  return (
    <Card
      key={props.id}
      style={{ width: "23rem", marginBottom: "15px" }}
    >
      <Link to={/user/ + props.userId}>
        <Card.Img variant="top" src={avatar} />
      </Link>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button
        
          variant="primary"
          value={props.id}
          onClick={() => {
            dispatch(fetchComments(Number(props.postId)));
            setOpenComments((prev) => !prev);

          }}
          style={{ marginBottom: "5px" }}
        >
          Загрузить комментарии
        </Button>
        {commentsLoading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {openComments &&

comments.map((comment) => (
  <ListGroup as="ul" >
    <ListGroup.Item
      style={{ marginBottom: "5px" }}
      as="li"
      className="d-flex justify-content-between align-items-center"
    >
      <div className="ms-2 me-auto" >
        <div className="fw-bold">{comment.email}</div>
        {comment.body}
      </div>
    </ListGroup.Item>
  </ListGroup>
))}


       
        {commentsError && <p>{commentsError.message}</p>}
      </Card.Body>

    </Card>
  );
}
