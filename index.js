module.exports = {CalcularCombustivel, CalcularParadas}

let passageiros = ["criancas", "adultos", "criancas"]
let refeicoes = ["completa", "leve", "leve"]

console.log(CalcularParadas(passageiros,190))

// Parametro Distancia colocado em metros
function CalcularCombustivel(distancia, combustivel) {
    if(!Number.isInteger(distancia) || distancia < 0 || combustivel != "gasolina" || combustivel != "etanol"){
        return false
    }else{
        let litragem = 0
        if(combustivel === "gasolina"){
            litragem = Math.ceil(distancia/16000)
        }
        else if(combustivel === "etanol"){
            litragem = Math.ceil(distancia/11000)
        }
        return litragem
    }
}

// Parametro tempoViagem colocado em minutos
function CalcularParadas(array,tempoViagem) {
    let adultos = 0
    let criancas = 0
    let paradas = 0
    let boolean = true
    array.forEach(x => {
        if(x != "adulto" || x != "crianca" || x === null || x === undefined){
            boolean = false
        }else if(x === "adulto"){
            adultos++
        }else{
            criancas++
        }
    })
    if(boolean === false || tempoViagem < 0 || Number.isFinite(tempoViagem)){
        return false
    }
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

