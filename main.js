addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#form')


    let cont = 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();    
        if(cont <= 40){
            let dataInput = Object.fromEntries(new FormData(e.target))
            let fecha = dataInput.fecha
            let plan = dataInput.planes
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${cont} </td>
                    <td> ${fecha}  </td>
                    <td> ${plan} </td>
                </tr>
                `)
                cont++
            }
        })        
    })         