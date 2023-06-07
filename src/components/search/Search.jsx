import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import { useState, useRef } from "react";
import styles from "./index.module.css";

export function Search({ setSearch, setPostTitle }) {
  const [title, setTitle] = useState("");
  const ref = useRef();

  return (
    <InputGroup className="mb-3">
      <Form.Control
      className={styles.search_input}
        placeholder="Поиск по заголовку"
        aria-label="Поиск по заголовку"
        aria-describedby="basic-addon2"
        onChange={(event) => setTitle(event.target.value)}
        ref={ref}
      />
      <CloseButton
        className={styles.search_closeBtn}
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
