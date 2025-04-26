import { horariosdisp } from "../form/hours.js";
import { searchScheduling } from "../../services/agend-do-dia.js";

 const data = document.querySelector("#date")

export async function AgendamentoDay(){

   let  date = data.value
 
   // lendo a api 
   let schedulingApiDay= await  searchScheduling({date})
   console.log(schedulingApiDay)


   // renderiza horario disponivel 
    horariosdisp(date)
    

}
