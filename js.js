const generate = document.querySelector(".prize-draw")
const resultGenerate = document.querySelector("#result-text")

function goodLuck(){
    const nunberMin = Math.ceil(document.querySelector(".min").value)
    const nunberMax = Math.floor(document.querySelector(".max").value)
 
    
 
   const result = Math.floor(Math.random() * (nunberMax - nunberMin + 1)) + nunberMin;
      
   resultGenerate.innerHTML = result 

 } 
 function ChangeResult(){
    const resultGenerate = document.querySelector("#result-text")
    
    resultGenerate.innerHTML = result
    
    
    
    }



resultGenerate.addEventListener("change", ChangeResult)
  generate.addEventListener("click" , goodLuck)