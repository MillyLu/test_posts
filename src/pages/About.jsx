import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export function AboutPage() {
  return (
    <Card className="text-center">
      <Card.Header>Обо мне</Card.Header>
      <Card.Body>
        <Card.Title>Миронова Юлия Ильдаровна</Card.Title>
        <Card.Text>Начинающий frontend-разработчик</Card.Text>
        <Button variant="primary">Ссылка на github</Button>
        <Card.Subtitle className="mb-2 text-muted">
          Что я знаю и умею:
        </Card.Subtitle>
        <ListGroup>
          <ListGroup.Item>
            Обладаю знаниями процессов и инструментов webразработки.
          </ListGroup.Item>
          <ListGroup.Item>
            Имею навыки работы с HTML и CSS и практические навыки верстки.
            Вёрстка по БЭМ + Верстка по макетам из Figma.
          </ListGroup.Item>
          <ListGroup.Item>
            Знаю основы Javascript/Typescript, есть практический опыт
            программирования на Javascript.
          </ListGroup.Item>
          <ListGroup.Item>
            Понимаю принципы работы клиент-серверных приложений, есть опыт
            работы с REST API.
          </ListGroup.Item>
          <ListGroup.Item>
            Есть опыт разработки SPA-приложений на React/Redux, деплой
            приложений на Netlify.
          </ListGroup.Item>
          <ListGroup.Item>Имею навыки написания unit-тестов.</ListGroup.Item>
          <ListGroup.Item>
            Имею базовые знания бэкенд-разработки - Node.js, Express.js,
            MongoDB, Google firebase.
          </ListGroup.Item>
          <ListGroup.Item>
            Обладаю широким кругозором в области IT и желанием развиваться в
            данной сфере.
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
