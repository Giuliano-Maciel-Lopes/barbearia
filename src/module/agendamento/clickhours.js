export function clickhours() {
  const aviliable = document.querySelectorAll(".hour-available");

  aviliable.forEach((item) => {

    item.addEventListener("click", (selected) => {

        aviliable.forEach(( itemslected)=>{ // tira selecao de tds os outros para ficar so 1 
            itemslected.classList.remove("hour-selected")
        })
    
     selected.target.classList.add("hour-selected");
    
     
    });
  });
}
