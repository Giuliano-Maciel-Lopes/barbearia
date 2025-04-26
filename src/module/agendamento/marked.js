import dayjs from "dayjs";

export async function marked() {
    const name = document.querySelector("#client").value;
    if(!name){
        alert("deixou o campo name em branco")
    }
    const hours = document.querySelector(".hour-selected")?.textContent;
    if(!hours)
      
    alert("escolha uma horario")
    const date = document.querySelector("#date").value;
    
    const two = dayjs(date).add(hours , "hour")
    
    const id = new Date().getTime()
      

  
    const markeduser = {
      name: name,
      date: two,
      id: id
      
    };
  console.log(markeduser)
    return markeduser
  }
  