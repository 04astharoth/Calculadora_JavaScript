var Calculadora = {
  //variables globales
  operando1: 0,
  operando2: 0,
  operacion: "",
  // obteniendo los botones
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
  punto: document.getElementById('punto'),
  sign: document.getElementById('sign'),
  on: document.getElementById('on'),

  //botones de operaciones aritmeticas
  raiz: document.getElementById('raiz'),
  division: document.getElementById('dividido'),
  multiplicacion: document.getElementById('por'),
  resta: document.getElementById('menos'),
  suma: document.getElementById('mas'),
  resultado: document.getElementById('igual'),


  //Funciones
  imprimirDigito: function (numero) { // valida la long. de display, esta no sera mayor a 8 digitos
    if (this.display.innerHTML.length < 8) {
      if (this.display.innerHTML == "0") {
        this.display.innerHTML = numero
      } else {
        this.display.innerHTML += numero
      }
    }
  },

  init: function () {
    this.raiz.addEventListener("click", function () {
      Calculadora.operando1 = parseFloat(Calculadora.display.innerHTML)
      var resultado = Math.sqrt(num).toPrecision(7)
      Calculadora.display.innerHTML = resultado
    })

    this.suma.addEventListener("click", function () {
      Calculadora.operando1 = parseFloat(Calculadora.display.innerHTML)
      Calculadora.operacion = "+"
      Calculadora.display.innerHTML = ""
    })

    this.resta.addEventListener("click", function () {
      Calculadora.operacion = "-"
    })

    this.multiplicacion.addEventListener("click", function () {
      Calculadora.operacion = "*"
    })

    this.division.addEventListener("click", function () {
      Calculadora.operacion = "/"
    })

    this.resultado.addEventListener("click", function () {
      switch (Calculadora.operacion) {
        case "+":
          Calculadora.operando2 = parseFloat(Calculadora.display.innerHTML)
          var resultado = Calculadora.operando1 + Calculadora.operando2
          Calculadora.display.innerHTML = resultado
          break;

        default:
          break;
      }
    })

    this.on.addEventListener("click", function () {
      Calculadora.display.innerHTML = "0"
    });

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

    this.cero.addEventListener("click", function () {
      Calculadora.imprimirDigito("0")
    });

    this.punto.addEventListener("click", function () {
      // validamos que en el display no exista el punto, sino deja concatenar el punto
      if (Calculadora.display.innerHTML.indexOf('.') == -1) {
        Calculadora.display.innerHTML += '.'
      }
    });

    this.sign.addEventListener("click", function () {
      Calculadora.display.innerHTML = -1 * parseFloat(Calculadora.display.innerHTML)
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