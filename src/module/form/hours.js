import dayjs from "dayjs";
import { operationHours   } from "../../dados/hora-funcionamento.js";
import { clickhours } from "../agendamento/clickhours.js";
const ul = document.querySelector(".hours")
export function horariosdisp({date , schedulingApiDay = []}){
  
  
  
ul.innerHTML = "" //limpa 

 const hour = schedulingApiDay.map((marcados)=>{
  return dayjs(marcados.date).hour()
  
  })

    const disponivel = operationHours.map( (horas)=>{ // mapiei cada  item da array
  const [horasSeparadas]= horas.split(":") // criei uma const onde vai ter cada hora
 


   const yesno = dayjs(date).hour(horasSeparadas , "hour").isBefore(dayjs()) // o primeiro pega a data do input o hour => pega ads horas doa array  isbefore compara com a data atual do navegador
    // c o horario ja passou ou nao deixandoimposiibilitado com a linha abaixo 
    const Jamarcados = hour.includes(Number(horasSeparadas))
     const avaliable = Jamarcados || yesno

   return {horasSeparadas 
   , avaliable
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


