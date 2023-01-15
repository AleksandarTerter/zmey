import CodeViewer, { CodeType } from "../components/CodeViewer";

import { Component } from "solid-js";

const htmlExample = `<!DOCTYPE html>
<html>
   <head>
      <title>Page Title</title>
   </head>
   <body>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
   </body>
</html>`;

const cssExample = `body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
}

p {
    font-family: verdana;
    font-size: 20px;
}`;

const jsExmaple = `document.getElementById("demo").innerHTML = "Hello JavaScript";`;

const arduinoCode = `
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);
  delay(1);        // delay in between reads for stability
}
`;

const Program: Component = () => (
  <>
    <h2>Програма</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Java Script</li>
      <li>Arduino</li>
    </ul>

    <h3>HTML</h3>
    <h4>Какво е HTML</h4>
    <p>
      HTML e основният маркиращ език за описание и дизайн на уеб страници. Чрез
      него ние можем да изграждаме уеб страници съдържащи текст, картинки, аудо
      и видео.
    </p>

    <h4>Примерен код:</h4>
    <CodeViewer code={htmlExample} type={CodeType.html} />

    <h3>CSS</h3>
    <h4>Какво е CSS</h4>
    <p>
      CSS (Cascading Style Sheets) е език за описание на стилове (език за
      стилови файлове, style sheet language) – използва се основно за описание
      на онлайн представянето (изгледа) на уеббазиран документ (HTML най-често).
      Чрез него ние можем да програмираме цвета, големината, разположението и
      други визуални характеристики на елементи от докумените.
    </p>

    <h4>Примерен код:</h4>
    <CodeViewer code={cssExample} type={CodeType.css} />

    <h3>Java Script</h3>
    <h4>Какво е Java Script</h4>
    <p>
      JavaScript (ДжаваСкрипт) е интерпретируем език за програмиране,
      разпространяван с повечето уеб браузъри. Поддържа обектно ориентиран и
      функционален стил на програмиране. Създаден е в Netscape през 1995 г.
      Най-често се прилага към HTML-а на интернет страница с цел добавяне на
      функционалност и зареждане на данни. Може да се ползва също за писане на
      сървърни скриптове JSON, както и за много други приложения. JavaScript не
      трябва да се бърка с Java (друг език за програмиране). Чрез него можем да програмираме
      най-различни неща в HTML страниците, от това да правим прости промени по
      съдържанието и/или стилизирането на страници до това да ги превърнем в игри
      или програми.
    </p>

    <h4>Примерен код:</h4>
    <CodeViewer code={jsExmaple} type={CodeType.js} />

    <h3>Ардуино</h3>
    <h4>Какво е Ардуино</h4>
    <p>
      По същество Arduino са микроконтролерни развойни платки (плакти служещи за обучение или разработка на електрически схеми). Arduino се състои от 8-битов Atmel AVR микроконтролер (програмируеми чипове) с допълващи се компоненти, които улесняват програмирането и включването в други вериги. Важен аспект на Arduino платформата, е наличието на стандартни конектори, които позволяват на потребителите да свързват CPU платката към голям набор от различни, взаимнозаменяеми модули, наречени шилдове.
    </p>

    <img src="src/assets/images/ArduinoUno.png" />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TesnKjba0l0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h4>Примерен код:</h4>
    <CodeViewer code={arduinoCode} type={CodeType.js} />
  </>
);
export default Program;
