import dayjs from "dayjs";
import { operationHours   } from "../../dados/hora-funcionamento.js";
import { clickhours } from "../agendamento/clickhours.js";
const ul = document.querySelector(".hours")
export function horariosdisp({date}){
  
  
  
ul.innerHTML = "" //limpa 

    const disponivel = operationHours.map( (horas)=>{ // mapiei cada  item da array
  const [horasSeparadas]= horas.split(":") // criei uma const onde vai ter cada hora
 


   const yesno = dayjs(date).hour(horasSeparadas , "hour").isBefore(dayjs()) // c o horario ja passou ou nao deixandoimposiibilitado 
   return {horasSeparadas 
   , avaliable: yesno 
}// pega vdd ou false

  })

 disponivel.forEach(({horasSeparadas , avaliable})=>{
 

  if(horasSeparadas === "09"){
    housAdd("manha")
  }else if (horasSeparadas === "12") {
    housAdd("tarde")
  } else if(horasSeparadas === "18"){
    housAdd("noite")
  }
  

 const li = document.createElement("li")
 
 li.classList.add(avaliable ?  "hour-unavailable" :"hour-available" )
 li.classList.add("hour")
 li.textContent = horasSeparadas
 ul.append(li)

 
})

function housAdd(text){
 const limtn = document.createElement("li")
 limtn.classList.add("hour-period")
 limtn.textContent= text

 ul.append(limtn)
 


  
}

clickhours()


    
}


