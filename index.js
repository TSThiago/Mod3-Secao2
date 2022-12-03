let passageiros = ["crianca", "adulto", "crianca"]

console.log(CalcularParadas(passageiros,190))

// Parametro Distancia colocado em metros
function CalcularCombustivel(distancia, combustivel) {
    let litragem = 0
    if(combustivel === "gasolina"){
        litragem = Math.ceil(distancia/16000)
    }
    else if(combustivel === "etanol"){
        litragem = Math.ceil(distancia/11000)
    }
    return litragem
}

// Parametro tempoViagem colocado em minutos
function CalcularParadas(array,tempoViagem) {
    let adultos = 0
    let criancas = 0
    let paradas = 0
    array.forEach(x => {
        if(x === "adulto"){
            adultos++
        }else{
            criancas++
        }
    })
    if(criancas === 0){
        paradas = Math.ceil(tempoViagem / 90)
    }else if(criancas > 0 && criancas <= adultos){
        paradas = Math.ceil(tempoViagem / 60)
    }else if(criancas > adultos){
        paradas = Math.ceil(tempoViagem / 40)
    }
    return paradas
}

function CalcularRefeicoes(paradas, array) {
    
}