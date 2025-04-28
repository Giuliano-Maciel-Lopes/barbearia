import { horariosdisp } from "../form/hours.js";
import { searchScheduling } from "../../services/agend-do-dia.js";
import { sampleScheduling } from "./agend-sample.js";

 const data = document.querySelector("#date")

export async function AgendamentoDay(){

   let  date = data.value
 
   // lendo a api 
   let schedulingApiDay = await  searchScheduling({date})
   
   sampleScheduling({schedulingApiDay ,  date})


   // renderiza horario disponivel 
    horariosdisp({date ,  schedulingApiDay})
    

}
