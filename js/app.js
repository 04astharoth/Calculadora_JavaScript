var Calculadora = {
  tecla: document.querySelectorAll('.tecla'),
  display: document.getElementById('display'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  cero: document.getElementById('0'),


  //Funciones
  imprimirDigito: function (numero) {
    if (this.display.innerHTML.length < 8) {
      if (this.display.innerHTML == "0") {
        this.display.innerHTML = numero
      } else {
        this.display.innerHTML += numero
      }
    }
  },


  init: function () {
    this.uno.addEventListener("click", function () {
      Calculadora.imprimirDigito("1")
    });

    this.dos.addEventListener("click", function () {
      Calculadora.imprimirDigito("2")
    });

    this.tres.addEventListener("click", function () {
      Calculadora.imprimirDigito("3")
    });

    this.cuatro.addEventListener("click", function () {
      Calculadora.imprimirDigito("4")
    });

    this.cinco.addEventListener("click", function () {
      Calculadora.imprimirDigito("5")
    });

    this.seis.addEventListener("click", function () {
      Calculadora.imprimirDigito("6")
    });

    this.siete.addEventListener("click", function () {
      Calculadora.imprimirDigito("7")
    });

    this.ocho.addEventListener("click", function () {
      Calculadora.imprimirDigito("8")
    });

    this.nueve.addEventListener("click", function () {
      Calculadora.imprimirDigito("9")
    });
    
    // animacion en las teclas
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mousedown', function () {
        this.style.transform = "scale(0.9)"
      })
      this.tecla[i].addEventListener('mouseup', function () {
        this.style.transform = "scale(1)"
      })
    }
  }
}

Calculadora.init();