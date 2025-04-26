import dayjs from "dayjs"
import { marked } from "../agendamento/marked"
import { newscheduling } from "../../services/new-scheduling"

const form = document.querySelector(".form")
const inputdate = document.querySelector("#date")

const configDate= dayjs(new Date()).format("YYYY-MM-DD")

inputdate.value = configDate // data de hoje configurada 
inputdate.min = configDate // data min as outras para atras fica "invesives"




form.addEventListener("submit",async (event)=> {
    event.preventDefault()
console.log(hours)
 const markeduser = await marked()

   const teste = await newscheduling( {name: markeduser.name,
    id: markeduser.id,
    date: markeduser.date}) // vai para o json 
    
})