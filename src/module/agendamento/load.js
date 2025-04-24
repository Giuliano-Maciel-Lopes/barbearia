import { horariosdisp } from "../form/hours.js";

 const data = document.querySelector("#date")
export function AgendamentoDay(){

   let  date = data.value
    horariosdisp(date)
    

}
