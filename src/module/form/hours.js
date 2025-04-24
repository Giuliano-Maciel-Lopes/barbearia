import dayjs from "dayjs";
import { operationHours } from "../../dados/hora-funcionamento.js";

export function horariosdisp({date}){
    const disponivel = operationHours.map( (horas)=>{
  const [horasSeparadas]= horas.split(":")
 


   const yesno = dayjs(date).hour(horasSeparadas , "hour").isBefore(dayjs())
   return {horasSeparadas 
   , avaliable: yesno 
}// pega vdd ou false

  })

 
    

console.log(disponivel)
}

