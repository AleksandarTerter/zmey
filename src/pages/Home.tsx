import { Component } from "solid-js/types/render/component";

const Home: Component<{}> = (props) => (
  <>
    <h1>Клуб по информатика и електроника "Змей"</h1>
    <br />

    <h2>Кои сме ние:</h2>
    <p>
      Клуб змей е клуб по информатиока и електроника за ученици от 5-ти до 8-ми
      клас. Основната ни дейност е организиране на групи с до 6 деца за пълен
      цикъл на обучение по програмата ни с продължителност няколко месеца.
      Обученията са веднъж седмично с продължителност 2-3 часа в{" "}
      <a href="http://chitalishte-mramor.com/">
        Народно читалище "Св. Иван Рилски – 1922"
      </a>
      .
    </p>

    <address>
      <h4>Контакти:</h4>
      <a href="https://www.facebook.com/profile.php?id=100085038212389">
        Александър Тодоров
      </a>
      <br />
      <a href="mailto:eng.a.todorov@proton.me">eng.a.todorov@proton.me</a>{" "}
      <br />
      <a href="tel:+13115552368">087 884 1962</a>
      <br />
    </address>
  </>
);
export default Home;
