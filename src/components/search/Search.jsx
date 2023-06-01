import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export function Search({ setSearch, setPostTitle}) {

    const [title, setTitle] = useState('');

    return(
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Поиск по заголовку"
          aria-label="Поиск по заголовку"
          aria-describedby="basic-addon2"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button onClick={() => setPostTitle(title)} variant="outline-secondary" id="button-addon2">
          Найти
        </Button>
      </InputGroup>
    )
}