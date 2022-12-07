const index = require("./index")

// Calcular combustível

test('calcular combustível, se o combustível for gasolina e a distancia for 16000m, a litragem é de 1L', () => {
    expect(index.CalcularCombustivel(16000,"gasolina"))
})

test('calcular combustível, se o combustível for etanol e a distancia for 11000m, a litragem é de 1L', () => {
    expect(index.CalcularCombustivel(11000,"etanol"))
})

test('calcular combustível, erro porque a distancia é negativa', () => {
    expect(index.CalcularCombustivel(-16000,"gasolina"))
})

test('calcular combustível, erro porque a distancia não é inteiro', () => {
    expect(index.CalcularCombustivel(16000.3,"gasolina"))
})

test('calcular combustível, serro porque o combustível não é gasolina nem etanol', () => {
    expect(index.CalcularCombustivel(16000,"asdasd"))
})

// Calcular paradas


