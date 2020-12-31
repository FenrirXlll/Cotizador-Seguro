//Constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// Instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
  // LLena el SELECT con los años
  ui.llenarOpciones();
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault;

  // Leer la marca selectionada
  const marca = document.querySelector("#marca").value;

  // Leer la año selectionada
  const year = document.querySelector("#year").value;

  // Leer la cobertura selectionada
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    console.log('no');
    
  } else {
    console.log('si');
    
  }
  
}
