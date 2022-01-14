const nombres = document.getElementById('nombres')
const paises = document.getElementById('paises')
const inpNombres = document.getElementById('inpNombres')
const botonAgrega = document.getElementById('botonAgrega')
const botonPais = document.getElementById('botonPais')
let arrayPaises = ["Argentina", "Brasil", "Colombia", "Uruguay"]

botonAgrega.addEventListener("click",() => {
    let nuevoNombre = inpNombres.value
    const nuevoLi = document.createElement('li')
    nuevoLi.innerHTML = nuevoNombre
    nombres.appendChild(nuevoLi)
})

botonPais.addEventListener("click",() => {
    for (pais of arrayPaises){
        let nuevoPais = document.createElement('li')
        nuevoPais.innerHTML = pais
        paises.appendChild(nuevoPais)
    }
})
    

