+function() {
	// Elementos
	var mayor = document.getElementById("mayor");
    
    var obtenerNumeros = function () {
        var inputs = document.getElementsByClassName("numero");
        var numeros = [];
        for (var i = 0, l = inputs.length; i < l; i++) {
            numeros.push(inputs[i].value);
        }
        return numeros;
    }
    
	// Manejador de Evento
	mayor.addEventListener("click", function () {
		var numeros = obtenerNumeros();
		var resultado = document.getElementById("resultado");
		resultado.textContent = mayorNumero(numeros);
	});
}();