let topping = (prompt('Cual topping desea para su helado'))
let helado = parseInt(1.90)
let oreo = parseInt(1)
let kitkat = parseInt(1.50)
let brownie = parseInt(0.75)
let lacasitos = parseInt(0.95)
let precio = topping

if (topping === 'oreo'){
   alert('el topping oreo cuesta 1 euro')
} else if (topping === 'kitkat'){
    alert('el topping de kitkat cuesta 1.50 euros')
} else if (topping === 'brownie'){
    alert('el topping de brownie cuesta 0.75 euros')
} else if (topping === 'lacasitos'){
    alert('el topping lacasitos cesta 0.95 euros')
} else {
    alert('No tenemos este topping, lo sentimos')
} 

// if (topping === (precio === oreo)){
// }  else if (topping === (precio === kitkat)){
// } else if (topping === (precio === brownie)){
// } else if (topping === (precio === lacasitos)){
// }

let precioFinal = helado + precio
textoA= 'son'
textoB= 'euros'
AprecioFinal = textoA + ' ' + precioFinal + ' ' + textoB
alert(AprecioFinal)
  console.log(precioFinal)




//---------------------------------------------------------------------------------------------------------------------------------

// const problematica = '¿Cuánto se tarda en recorrer una distancia de 10km a una velocidad de 40 km/h?'
// alert (problematica)

// const distancia = prompt ('Ingrese la distancia')
// const velocidad = prompt ('Ingrese la velocidad en Km/h')
// const sustitucionDV = distancia/velocidad
// const textoA = "El valor es igual a "
// const textoB = "horas"
// const EcuacionDV = textoA + ' ' + sustitucionDV + ' ' + textoB
// // Se calculan los valores 

// alert (EcuacionDV)

// const unaHora = 60
// // Se calcula una hora en 60 minutos

// const valorTotal = sustitucionDV * unaHora
// const textoC = 'al valor de'
// const textoD = 'se lo multiplica por'
// const textoE = 'que da como resultado'
// const textoF = 'minutos'
// const resultadoFinal =   textoC + ' ' + sustitucionDV + ' ' + textoD + ' ' + unaHora + ' ' + textoE + ' ' + valorTotal + ' ' + textoF
// //Se multiplica el valor de la ecuacion por una hora en minutos para el resultado final

// alert (resultadoFinal)







// const numero1 = 5
// const numero2 = 26;
// const nombre = prompt ('Escriba su nombre')
// const textoA = 'tiene'
// const textoB = 'en el año 2023'
// const sumaTotal = numero1 + numero2
// const nombreYEdad = nombre + ' ' + textoA + ' ' + sumaTotal + ' ' + textoB
// console.log (nombreYEdad)