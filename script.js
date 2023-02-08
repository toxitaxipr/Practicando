const problematica = '¿Cuánto se tarda en recorrer una distancia de 10km a una velocidad de 40 km/h?'
alert (problematica)

const distancia = prompt ('Ingrese la distancia')
const velocidad = prompt ('Ingrese la velocidad en Km/h')
const sustitucionDV = distancia/velocidad
const textoA = "El valor es igual a "
const textoB = "horas"
const EcuacionDV = textoA + ' ' + sustitucionDV + ' ' + textoB
// Se calculan los valores 

alert (EcuacionDV)

const unaHora = 60
// Se calcula una hora en 60 minutos

const valorTotal = sustitucionDV * unaHora
const textoC = 'al valor de'
const textoD = 'se lo multiplica por'
const textoE = 'que da como resultado'
const textoF = 'minutos'
const resultadoFinal =   textoC + ' ' + sustitucionDV + ' ' + textoD + ' ' + unaHora + ' ' + textoE + ' ' + valorTotal + ' ' + textoF
//Se multiplica el valor de la ecuacion por una hora en minutos para el resultado final

alert (resultadoFinal)







// const numero1 = 5
// const numero2 = 26;
// const nombre = prompt ('Escriba su nombre')
// const textoA = 'tiene'
// const textoB = 'en el año 2023'
// const sumaTotal = numero1 + numero2
// const nombreYEdad = nombre + ' ' + textoA + ' ' + sumaTotal + ' ' + textoB
// console.log (nombreYEdad)