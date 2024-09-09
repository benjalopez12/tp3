var precios = [50, 120, 75, 200, 90, 45, 150, 80, 60, 100, 130, 170, 210, 95, 85];

var preciosActualizados = precios.map(function(precio) {
    return precio * 1.10;
});

console.log(preciosActualizados);
