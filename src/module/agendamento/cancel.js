import { cancelarapi } from "../../services/cancelando agendado";

const periods = document.querySelectorAll(".period");

periods.forEach(listaitem => {
    listaitem.addEventListener("click", async (event) => {
        
        if (event.target.classList.contains("cancel-icon")) {

            const item = event.target.closest("li");
            const id = item.dataset.id  //pega o id para excluir tb na api 
            console.log(id)

            
            if (id) {
               
                const isConfirmed = confirm("Tem certeza que deseja excluir esse agendamento?");

                
                if (isConfirmed) {
                    console.log("Item excluído");
                    
                     await cancelarapi({id})
                     item.remove()
                 
                } else {
                    console.log("Item não excluído");
                }
            }
        }
    });
});
