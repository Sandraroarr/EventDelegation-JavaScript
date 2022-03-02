document.querySelector('button').addEventListener('click',()=>{
  const nombre = document.querySelector('.nombre').value;
  const apellido = document.querySelector('.apellido').value;
  const notaFinal = document.querySelector('.notaFinal').value;

  const nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${notaFinal}</td>
  `;

  document.querySelector('.tableBody').appendChild(nuevaFila)
  /* agregarEventos(); */
})

/* function agregarEventos(){
  document.querySelectorAll('td').forEach((td)=>{
  td.addEventListener('click',(e)=>{
    console.log(e)
    td.style.backgroundColor = 'greenyellow'
  })
})
}

agregarEventos(); */

const container = document.querySelector('table')
container.addEventListener('click', (evento)=>{
  if (evento.target.nodeName === 'TD'){
    evento.target.style.backgroundColor = 'greenyellow'
  }
})

