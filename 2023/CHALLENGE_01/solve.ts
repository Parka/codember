import { decode } from ".";

const URL = "https://codember.dev/data/message_01.txt";
fetch(URL)
  .then((response) => response.text())
  .then((data) => console.log(decode(data)));
