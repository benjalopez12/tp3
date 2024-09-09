var numerosAleatorios = [];
for (var i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.random() * 100);
}

var cubos = numerosAleatorios.map(function(numero) {
    return Math.pow(numero, 3);
});

console.log(cubos);
