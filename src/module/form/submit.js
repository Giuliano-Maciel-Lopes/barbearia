import dayjs from "dayjs"

const form = document.querySelector(".form")
const inputdate = document.querySelector("#date")

const configDate= dayjs(new Date()).format("YYYY-MM-DD")

inputdate.value = configDate // data de hoje configurada 
inputdate.min = configDate // data min as outras para atras fica "invesives"




form.addEventListener("submit", (event)=> {
    event.preventDefault()



    console.log("enviado")
})