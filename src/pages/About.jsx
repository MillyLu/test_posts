import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from 'react-bootstrap/Alert'
import { Header } from "../components/header/Header";
import { Link } from "react-router-dom";


export function AboutPage() {
  return (
    <>
    <Header />

        <Card className="text-center">
      <Card.Header>Обо мне</Card.Header>
      <Alert variant="success">
  <Alert.Heading>Привет! Меня зовут Юля!</Alert.Heading>
  <p>
  Я - начинающий frontend-разработчик
  </p>
  <hr />
  <Button style={{ marginBottom: '20px'}} href="https://github.com/MillyLu" variant="primary">Тут ссылочка на мой Github</Button>
  <p className="mb-0">
  Это мое выполненное тестовое задание на вакансию Junior Frontend developer (React)
  </p>
</Alert>
      <Card.Body>
 
        <br></br>
        <Card.Subtitle className="mb-2 text-muted">
          Недавно закончила обучение в SkyPro на веб-разработчика и теперь я:
        </Card.Subtitle>
        <br></br>
        <ListGroup>
          <ListGroup.Item>
          ‣ Обладаю знаниями процессов и инструментов webразработки.
          </ListGroup.Item>
          <ListGroup.Item>
          ‣ Имею навыки работы с HTML и CSS и практические навыки верстки.
            Вёрстка по БЭМ + Верстка по макетам из Figma.
          </ListGroup.Item>
          <ListGroup.Item>
          ‣ Знаю основы Javascript/Typescript, есть практический опыт
            программирования на Javascript.
          </ListGroup.Item>
          <ListGroup.Item>
          ‣ Понимаю принципы работы клиент-серверных приложений, есть опыт
            работы с REST API.
          </ListGroup.Item>
          <ListGroup.Item>
          ‣ Есть опыт разработки SPA-приложений на React/Redux, деплой
            приложений на Netlify.
          </ListGroup.Item>
          <ListGroup.Item>‣ Имею навыки написания unit-тестов.</ListGroup.Item>
          <ListGroup.Item>
          ‣ Имею базовые знания бэкенд-разработки - Node.js, Express.js,
            MongoDB, Google firebase.
          </ListGroup.Item>
          <ListGroup.Item>
          ‣ Обладаю широким кругозором в области IT и желанием развиваться в
            данной сфере.
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted"><Link to='https://t.me/mironchikjul'>Написать в telegram</Link></Card.Footer>
    </Card>
    </>

  );
}
