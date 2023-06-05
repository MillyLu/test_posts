import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import { useState, useRef } from "react";

export function Search({ setSearch, setPostTitle }) {
  const [title, setTitle] = useState("");
  const ref = useRef();

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Поиск по заголовку"
        aria-label="Поиск по заголовку"
        aria-describedby="basic-addon2"
        onChange={(event) => setTitle(event.target.value)}
        style={{ position: "relative" }}
        ref={ref}
      />
      <CloseButton
        style={{ position: "absolute", top: "0.4em", right: "4.4em" }}
        onClick={() => {
          setSearch(false);
          setTitle("");
          setPostTitle("");
          ref.current.value = "";
        }}
      />
      <Button
        onClick={() => {
          setPostTitle(title);
          setSearch(true);
        }}
        variant="outline-secondary"
        id="button-addon2"
      >
        Найти
      </Button>
    </InputGroup>
  );
}
