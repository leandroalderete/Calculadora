import { publicDecrypt } from "crypto";

export class Sumadora {
  public inputActive: String;
  public numero2: number;
  public numero1: number;
  public resultado: number;
  public operacion: number;

  constructor() {
    this.inputActive = "numero1"
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.operacion = 0;
  }

  public calcular() {

    this.operacion = parseInt(this.operacion.toString());
    switch (this.operacion) {
      case 1:
        this.resultado = parseInt(this.numero1.toString()) + this.numero2;
        break;

      case 2:
        this.resultado = this.numero1 - this.numero2;
        break;

      case 3:
        this.resultado = this.numero1 * this.numero2;
        break;

      case 4:
        this.resultado = this.numero1 / this.numero2;
        break;

      default:
        break;
    }

  }


  //creo funcion para concatenar   
  public concatenar(valor: number) {

   // this.numero1 = this.numero1 * 10 + parseInt(valor.toString());
   // this.numero2 = this.numero2 * 10 + parseInt(valor.toString()); // metodo ,de lo que tengo en el valor *10 + el boton que selecciono 
    if (this.inputActive == 'numero1') {
      this.numero1 = this.numero1 * 10 + parseInt(valor.toString());
    } else {

      this.numero2 = this.numero2 * 10 + parseInt(valor.toString());


    }

  }

  // creo funcion para limpiar calculadora al boton le doy la funcion 
  public limpiar() {

    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.inputActive = 'numero1';
  }

  public realizaOperacion(operacion: number) {
    this.operacion = operacion; /*this.operacion llama a la variable creada. //SIN EL THIS LLAMO AL PARAMETRO DE LA FUNCION*/
    this.inputActive = 'numero2';
    
  


  }
}

