import dayjs from "dayjs";

export function sampleScheduling({schedulingApiDay , date}) { // nesa funcao tem um return onde mostrar tds horarios diarios marcados da api 
const morning = document.querySelector("#period-morning")
const afternoom = document.querySelector("#period-afternoon")
const nigth = document.querySelector("#period-night")

morning.textContent= ""
afternoom.textContent= ""
nigth.textContent= ""

schedulingApiDay.filter(marcado=>{
    return dayjs(marcado.date).isSame(date, "day");
})


schedulingApiDay.forEach( (marcados) => { // aqui percooro cada elemento da api  e pego suas propriedades ex 1 veja abaixo
    
      
      const li =  document.createElement("li")
      li.dataset.id = marcados.id;  // cria um id para api 
    

      const strong = document.createElement("strong")
      strong.innerHTML = dayjs(marcados.date).format("HH:mm") // vc vai pegar a hora do agendados api e mostar o sub obejto "dare trazendo para hh:mm"

      const span= document.createElement("span")
      span.textContent = marcados.name // ex 1 aqui acessei o nome pela api

      const img = document.createElement ("img")
      img.setAttribute("src" , "./src/assets/cancel.svg")
      img.setAttribute("alt" , "cancelar")
      img.classList.add("cancel-icon")

    li.append( strong , span , img)

    const hour = dayjs(marcados.date).hour() // horas dp agendado da api agendados . date

    if (hour >= 9 && hour <= 12 ) {
        morning.append(li)
        
    }else if (hour >12 && hour < 18){
        afternoom.append(li)

    }
    else
        nigth.append(li)
        
    });
    
}