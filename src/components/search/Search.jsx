import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";

export function Search() {

    return(
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
    )
}