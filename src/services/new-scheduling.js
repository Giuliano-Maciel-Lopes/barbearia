import { apiConfig } from "./api-config";


 export async function newscheduling({name , id , date}) {
    try {
        await fetch(`${apiConfig.baseURL}/agendados` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              
            body: JSON.stringify({name , id , date})
            
           
        
        })
        alert("agendamento feito com sucesso!")
        
    } catch (error) {
        alert("erro tente novamente mais tarde")
        console.log(error)
    }
    


  
    
}