//pantalla de bienvenida
/*const name = prompt(`Bienvenid@, gracias por jugar esta trivia, ¿Cuál es tu nombre?`);
const opcion = prompt(`¡Hola ${name}!
elige una opción para empezar a jugar
1. Cultura general
2. Inglés básico`)
let puntaje = 1;
const respuesta = prompt(`1. ¿En que año se descubrió america?
          a) 1532
          b) 1492
          c) 1821 `);

if(respuesta === 'b'){
  puntaje = puntaje ++;
}
/*else{
  if(opcion === '2'){
    prompt(`Pon a prueba tus conocimienos de inglesx`);
  }
  prompt(`ingresa una opción valida`);
}*/
// const name = prompt(`Bienvenid@, gracias por jugar esta trivia, ¿Cuál es tu nombre?`);
// //const preg1=
// let puntaje = 0
// const opcion = prompt(`¡Hola! ${name}!
// elige una opción para empezar a jugar
// 1. Cultura general
// 2. Inglés`)
//
// switch (opcion) {
//    case '1':
//       // codigo para valor 1
//       alert(`Pon a prueba tus conocimienos de Cultura General`);
//       const respuesta1 = prompt(`1. ¿En que año se descubrió america?
//             a) 1532
//             b) 1492
//             c) 1821 `);
//             if(respuesta1 === 'b'){
//               puntaje = puntaje+1;
//             }
//       const respuesta2 = prompt(`2. ¿Cuando se llevo a cabo la revolucion francesa?
//             a) 1789
//             b) 1895
//             c) 1542 `);
//             if(respuesta2 === 'a'){
//               puntaje = puntaje+1;
//             }
//       const respuesta3 = prompt(`3. ¿Cuando se declaro la independencia del peru?
//             a) 1890
//             b) 1821
//             c) 1887 `);
//             if(respuesta3 === 'b'){
//               puntaje = puntaje+1;
//             }
//             break;
//    case '2':
//       // codigo para valor 2
//       alert(`Pon a prueba tus conocimienos de Inglés`);
//       const respuesta21 = prompt(`1. traducir: ¿what is your name?
//           a) ¿de donde eres?
//           b) ¿como estas?
//           c) ¿cual es tu nombre? `);
//           if(respuesta21 === 'c'){
//             puntaje = puntaje+1;
//           }
//       const respuesta22 = prompt(`2. traducir: ¿where are you from?
//           a) ¿donde vives?
//           b) ¿como te llamas?
//           c) ¿de donde eres? `);
//           if(respuesta22 === 'a'){
//             puntaje = puntaje+1;
//           }
//       const respuesta23 = prompt(`3. traducir: ¡congratulation!
//           a) ¡felicitaciones!
//           b) ¡buenos dias!
//           c) ¡adios! `);
//           if(respuesta23 === 'a'){
//             puntaje = puntaje+1;
//           }
//       default:
//       // código si no es ninguno de los anteriores
//           prompt(`ingresa una opción valida`);
            //  break;
//           }
// document.write(`tu puntaje es ${puntaje}`);
// console.log(puntaje);

document.getElementById('button').onclick= function(){
  const nombre = document.getElementById('dato').value
  const bienvenida= `¡Hola, ${nombre}!`
  const saludo= document.getElementById('hola')
  saludo.innerHTML= bienvenida
  const pant1 = document.getElementById('pantalla1')
  pant1.style.display="none"
  const pant2 = document.getElementById('pantalla2')
  pant2.style.display= "block"
}
document.getElementById('buttonA').onclick=function(){
  let puntaje = 0
  let pIncorrecto=0
  const respuesta1 = prompt(`1. ¿En que año se invadió América america?
              a) 1532
              b) 1492
              c) 1821 `);
             if(respuesta1 === 'b'){
               puntaje = puntaje+1;
             }else{
               pIncorrecto=pIncorrecto+1
             }
       const respuesta2 = prompt(`2. ¿Cuándo se llevó a cabo la revolución Francesa?
             a) 1789
             b) 1895
             c) 1542 `);
             if(respuesta2 === 'a'){
               puntaje = puntaje+1;
             }else{
               pIncorrecto=pIncorrecto+1
             }
       const respuesta3 = prompt(`3. ¿Cuándo se declaró la independencia del Perú?
             a) 1890
             b) 1821
             c) 1887 `);
             if(respuesta3 === 'b'){
               puntaje = puntaje+1;
             }else{
               pIncorrecto=pIncorrecto+1
             }
             opcion.innerHTML= `Respuestas correctas ${puntaje} <br/><br/><br/>
              Respuestas incorrectas ${pIncorrecto}
             <br/><br/><br/> ¿QUIERES VOLVER A JUGAR? <br/><br/><br/>`
}
document.getElementById('buttonB').onclick= function(){
  let puntaje = 0
  let pIncorrecto=0
  const respuesta1 = prompt(`1. traducir la siguiente frase: ¿what is your name?
            a) ¿de donde eres?
             b) ¿como estas?
             c) ¿cual es tu nombre? `);
            if(respuesta1 === 'c'){
              puntaje = puntaje+1;
            }else{
              pIncorrecto=pIncorrecto+1
            }
        const respuesta2 = prompt(`2. traducir la siguiente frase: ¿where are you from?
            a) ¿donde vives?
            b) ¿como te llamas?
            c) ¿de donde eres? `);
            if(respuesta2 === 'a'){
              puntaje = puntaje+1;
            }else{
              pIncorrecto=pIncorrecto+1
            }
        const respuesta3 = prompt(`3. traducir la siguiente frase: ¡congratulation!
            a) ¡felicitaciones!
            b) ¡buenos dias!
            c) ¡adios! `);
            if(respuesta3 === 'a'){
              puntaje = puntaje+1;
            }else{
              pIncorrecto=pIncorrecto+1
            }
            opcion.innerHTML= `Respuestas correctas ${puntaje} <br/><br/><br/>
                                Respuestas incorrectas ${pIncorrecto}
                                <br/><br/><br/> ¿QUIERES VOLVER A JUGAR? <br/><br/><br/>`
}
