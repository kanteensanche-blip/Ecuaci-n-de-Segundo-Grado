async function enviar_datos_al_servidor() {
    // Function implementation
    // console.log("Calculating...");
    let a = document.getElementById("valor_a").value
    let b = document.getElementById("valor_b").value
    let c = document.getElementById("valor_c").value
    let json_valores = JSON.stringify([a,b,c]);
    const response = await fetch(`http://127.0.0.1:5000/ecuacion/${json_valores}`);
    const json_soluciones = await response.json();
    
    let num_soluciones = Number(parseFloat(json_soluciones[0]).toFixed(2))
    let x1 = Number(parseFloat(json_soluciones[1]).toFixed(2))
    let x2 = Number(parseFloat(json_soluciones[2]).toFixed(2))

    if (num_soluciones === 0) {
        Swal.fire({title: '¡ERROR!', html: 'Esta ecuación no tiene solución real', icon: 'error'})
    }
    else if (num_soluciones === 1) {
        Swal.fire({title: '¡Resuelta!', html: 'Esta ecuación tiene una solución: <br> x = ' + x1, icon: 'success'})
    }
    else if (num_soluciones === 2) {
        Swal.fire({title: '¡Resuelta!', html: 'Esta ecuación tiene dos soluciones: <br> x = ' + x1 + '<br> x = ' + x2, icon: 'success'})
    }
    else {
        Swal.fire({title: '¡ERROR!', html: 'El valor de "a" no puede ser 0', icon: 'error'})
    }
}
