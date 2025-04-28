import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function searchScheduling({date}) {
    try {
        const response =  await fetch(`${apiConfig.baseURL}/agendados`)
        
        const serachDate = await response.json()

       const dayScheduling=  serachDate.filter((agendamentos)=>{
          return  dayjs(date).isSame(agendamentos.date , "date")

            
        })
        return dayScheduling

    } catch (error) {
        alert("nao foi resgatar o horario do dia ")
        
    }
    
   

    
}