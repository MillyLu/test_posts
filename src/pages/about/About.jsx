import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import styles from "./about.module.css";

export function About() {
  return (
    <>
      <Header />

      <Card className="text-center">
        <Card.Header>Обо мне</Card.Header>
        <Alert variant="light">
          <Alert.Heading>Привет! Меня зовут Юля!</Alert.Heading>
          <p>Я - начинающий frontend-разработчик</p>
          <hr />
          <Button
            className={styles.about_btn}
            href="https://github.com/MillyLu"
            variant="primary"
          >
            Тут ссылочка на мой Github
          </Button>
          <p className="mb-0">
            Это мое выполненное тестовое задание на вакансию Junior Frontend
            developer (React)
          </p>
        </Alert>
        <Card.Body>
          <Card.Subtitle className={`mb-2 text-muted ${styles.about_title}`}>
            Недавно закончила обучение в SkyPro на веб-разработчика и теперь я:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ‣ Обладаю знаниями процессов и инструментов webразработки.
          </Card.Text>
          <Card.Text>
            ‣ Имею навыки работы с HTML и CSS и практические навыки верстки.
            Вёрстка по БЭМ + Верстка по макетам из Figma.
          </Card.Text>
          <Card.Text>
            ‣ Знаю основы Javascript/Typescript, есть практический опыт
            программирования на Javascript.
          </Card.Text>
          <Card.Text>
            ‣ Понимаю принципы работы клиент-серверных приложений, есть опыт
            работы с REST API.
          </Card.Text>
          <Card.Text>
            ‣ Есть опыт разработки SPA-приложений на React/Redux, деплой
            приложений на Netlify.
          </Card.Text>
          <Card.Text>‣ Имею навыки написания unit-тестов.</Card.Text>
          <Card.Text>
            ‣ Имею базовые знания бэкенд-разработки - Node.js, Express.js,
            MongoDB, Google firebase.
          </Card.Text>
          <Card.Text>
            ‣ Обладаю широким кругозором в области IT и желанием развиваться в
            данной сфере.
          </Card.Text>
          <br></br>
          <Card.Subtitle className={`mb-2 text-muted ${styles.about_title}`}>
            За время обучения мной реализованы проекты:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ✼ Проект "Музыкальное приложение" - приложение для прослушивания
            музыки (клон Spotify)
          </Card.Text>
          <Card.Text>
            ✼ Проект "Карточная игра Memory" - карточная игра Memory, смысл
            которой - запомнить и найти все пары изображений или карт
          </Card.Text>
          <Card.Text>
            ✼ Проект "Todo-приложение" – приложение для планирования, с
            возможность добавления/удаления, отметки о выполнении
          </Card.Text>
          <br></br>
          <Card.Subtitle className={`mb-2 text-muted ${styles.about_title}`}>
            Немного обо мне:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ⮩ - имею аналитический склад ума, опыт работы с большими объемами
            данных;
          </Card.Text>
          <Card.Text>
            ⮩ ответственно и внимательно подхожу к своей работе,
          </Card.Text>
          <Card.Text>⮩ люблю решать сложные задачи</Card.Text>
          <Card.Text>
            ⮩ всегда ищу возможности к обучению и развитию, выхожу за рамки
            данных материалов
          </Card.Text>
          <Card.Text>⮩ ориентирована на развитие в области IT</Card.Text>
        </Card.Body>
        <br></br>
        <Card.Footer className="text-muted">
          <Link to="https://t.me/mironchikjul">Связаться со мной</Link>
        </Card.Footer>
      </Card>
    </>
  );
}
