addEventListener("DOMContentLoaded", (e) => {
    let myForm = document.querySelector("form")
    let conver = document.querySelector("span")
    let select = document.querySelector("#selection")
    
    
    
    select.addEventListener("click", (e) => {
        let input = document.querySelector("#val")
        console.log(e.target)
        if (e.target.value == "cop") {
            input.placeholder = "Ingrese Pesos Colombianos"
        }
        else if (e.target.value == "usd") {
            input.placeholder = "Ingrese US Dolares"
        }
    })

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));

        if (dataInput.conver == "cop") {

            let confi = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            let paD = Number(dataInput.valor * 0.00021)
            conver.innerHTML = `${confi.format(paD)}`
        }

        else if (dataInput.conver == "usd") {

            confi = Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' })
            let daP = Number(dataInput.valor * 4824.50)
            conver.innerHTML = `${confi.format(daP)}`

        }
    })
})