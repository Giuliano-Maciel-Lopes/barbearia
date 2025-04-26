import { horariosdisp } from "./hours";

const date = document.getElementById("date");

date.onchange = () => {
  // Pega o valor da data selecionada
  const selectedDate = date.value;

  // Chama a função passando a data corretamente
  horariosdisp({ date: selectedDate });
};
