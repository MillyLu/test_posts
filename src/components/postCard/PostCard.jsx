import { fetchComments } from "../../store/commentReducer";
import avatar from "../../assests/img/ava.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export function PostCard(props) {
  const [openComments, setOpenComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);
  console.log(comments);

  return (
    <Card key={props.id} style={{ width: "18rem" }}>
      <Link to={/user/ + props.userId}>
        <Card.Img variant="top" src={avatar} />
      </Link>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button
          variant="primary"
          value={props.key}
          onClick={() => {
            dispatch(fetchComments(Number(props.postId)));
            setOpenComments((prev) => !prev);
          }}
        >
          Загрузить комментарии
        </Button>
        {openComments &&
          comments.map((comment) => (
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{comment.email}</div>
                  {comment.body}
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
      </Card.Body>
    </Card>
  );
}
