import { apiConfig } from "./api-config";

export async function cancelarapi({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/agendados/${id}`, { 
            method: "DELETE"

        });

        alert("Agendamento cancelado com sucesso")
    } catch (error) {
        console.log("nao foi possivel deletar os itens da api ")
        alert("nao foi possivel cancelar os agendamentos")
        
    }
   
}
