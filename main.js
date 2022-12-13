addEventListener("DOMContentLoaded", (e) => {
    let myForm = document.querySelector("form")
    let conver = document.querySelector("span")
    let select = document.querySelector("#selection")
    
    
    
    select.addEventListener("click", (e) => {
        let input = document.querySelector("#val")
        if (e.target.value == "fahr") {
            input.placeholder = "Ingrese grados Fahrenheit"
        }
        else if (e.target.value == "cen") {
            input.placeholder = "Ingrese Grados Centigrados"
        }
    })

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));

        if (dataInput.conver == "fahr") {
            let faC = Number(dataInput.valor - 32) * 5/9
            conver.innerHTML = faC + ' grados Centigrados'
        }

        else if (dataInput.conver == "cen") {
            let caF = Number(dataInput.valor * 9/5) + 32 
            conver.innerHTML = caF + ' grados Fahrenheit'

        }
    })
})