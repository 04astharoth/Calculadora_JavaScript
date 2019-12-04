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

  init: function () {
    this.eventos()
  },
  eventos: function () {
    // numeros 
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
    //botones funcionales
    this.on.addEventListener("click", function () {
      Calculadora.display.innerHTML = 0
      Calculadora.operando2 = 0
    });
    this.sign.addEventListener("click", function () {
      Calculadora.display.innerHTML *= -1
    });
    this.punto.addEventListener("click", function () {
      // validamos que en el display no exista el punto, sino deja concatenar el punto
      if (Calculadora.display.innerHTML.indexOf(".") == -1) {
        Calculadora.display.innerHTML += "."
      }
    });
    this.raiz.addEventListener("click", function () {
      Calculadora.Raiz()
    })
    this.suma.addEventListener("click", function () {
      Calculadora.sumar();
    })
    this.resta.addEventListener("click", function () {
      Calculadora.restar()
    })
    this.multiplicacion.addEventListener("click", function () {
      Calculadora.producto()
    })
    this.division.addEventListener("click", function () {
      Calculadora.dividir()
    })
    this.resultado.addEventListener("click", function () {
      Calculadora.resolver()
    })
    // animacion en las teclas
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mousedown', function () {
        this.style.transform = "scale(0.9)"
      })
      this.tecla[i].addEventListener('mouseup', function () {
        this.style.transform = "scale(1)"
      })
    }
  },

  //Funciones
  imprimirDigito: function (numero) { // imprime digitos en pantalla hasta completar una long. de 8 caracteres
    if (this.display.innerHTML.length < 8) {
      if (this.display.innerHTML == "0") {
        this.display.innerHTML = numero
      } else {
        this.display.innerHTML += numero
      }
    }
    this.operando2 = parseFloat(this.display.innerHTML)
  },
  sumar: function () {
    this.operando1 = this.display.innerHTML
    this.display.innerHTML = ""
    this.operacion = "+"
  },
  restar: function () {
    this.operando1 = this.display.innerHTML
    this.display.innerHTML = ""
    this.operacion = "-"
  },
  producto: function () {
    this.operando1 = this.display.innerHTML
    this.display.innerHTML = ""
    this.operacion = "*"
  },
  dividir: function () {
    this.operando1 = this.display.innerHTML
    this.display.innerHTML = ""
    this.operacion = "/"
  },
  Raiz: function () {
    this.operando1 = parseFloat(this.display.innerHTML)
    this.display.innerHTML = Math.sqrt(this.operando1).toPrecision(7)
  },
  resolver: function () {
    switch (this.operacion) {
      case "+":
        this.display.innerHTML = parseFloat(this.operando1) + parseFloat(this.operando2)
        this.display.innerHTML = this.display.innerHTML.substring(0, 7)
        this.operando1 = this.display.innerHTML
        break;

      default:
        break;
    }
  }
}

Calculadora.init();