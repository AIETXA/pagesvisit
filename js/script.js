/*- Contador de visitas persistente utilizando `localStorage`.

2. Cada vez que se recarga la página debe añadir una visita más
3. Debe persistir el número aunque se cierre el navegador
4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
5. Toda la lógica tiene que estar en `script.js`*/


const botonReestablecer = document.getElementById('btnReestablecer'); //para reiniciar el contador a cero.
const contadorVisitas = document.getElementById('contadorVisitas');
let visita = localStorage.getItem('visita') || 0

function actualizarContador() {
  visita++
  console.log(visita);
  contadorVisitas.innerText = visita;
}
  actualizarContador();
localStorage.setItem('visita', visita)

 /* .addEventListener('')
  botonReestablecer.addEventListener('clik', () => {
}


*/