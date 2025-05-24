import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  response: number = 0;
  value1: number = 0;
  value2: number = 0;
  result: number = 0;
  operacion: string = "x";
  digitandoValue1 = true;
  digitandoValue2 = false;

  digitarValor0() {
    if (this.digitandoValue1) {
      this.value1 = 0;
    } else {
      this.value2 = 0;
    }

  }

  digitarValor1() {
    if (this.digitandoValue1) {
      this.value1 = 1;
    } else {
      this.value2 = 1;
    }

  }

  digitarValor2() {
    if (this.digitandoValue1) {
      this.value1 = 2;
    } else {
      this.value2 = 2;
    }

  }

  digitarValor3() {
    if (this.digitandoValue1) {
      this.value1 = 3;
    } else {
      this.value2 = 3;
    }


  }

  digitarValor4() {
    if (this.digitandoValue1) {
      this.value1 = 4;
    } else {
      this.value2 = 4;
    }


  }

  digitarValor5() {
    if (this.digitandoValue1) {
      this.value1 = 5;
    } else {
      this.value2 = 5;
    }

  }

  digitarValor6() {
    if (this.digitandoValue1) {
      this.value1 = 6;
    } else {
      this.value2 = 6;
    }

  }

  digitarValor7() {
    if (this.digitandoValue1) {
      this.value1 = 7;
    } else {
      this.value2 = 7;
    }


  }

  digitarValor8() {
    if (this.digitandoValue1) {
      this.value1 = 8;
    } else {
      this.value2 = 8;
    }


  }

  digitarValor9() {
    if (this.digitandoValue1) {
      this.value1 = 9;
    } else {
      this.value2 = 9;
    }


  }

  inverterBoolean() {
    if (this.digitandoValue1) {
      this.digitandoValue1 = false;
      this.digitandoValue2 = true;

    } else if (this.digitandoValue2) {
      this.digitandoValue1 = true;
      this.digitandoValue2 = false;
    }


  }

  somar() {
    this.inverterBoolean();
    this.operacion = "+";

    this.result = this.value1 + this.value2
    return this.result
  }

  subtrair() {
    this.inverterBoolean();
    this.operacion = "-";

    this.result = this.value1 - this.value2
    return this.result
  }

  multiplicar() {
    this.inverterBoolean();
    this.operacion = "x";

    this.result = this.value1 * this.value2
    return this.result
  }

  dividir() {
    this.inverterBoolean();
    this.operacion = "/";

    this.result = this.value1 / this.value2
    return this.result
  }

  obterResultado() {
    if(this.operacion == "+") {
      this.somar();
    } else if(this.operacion == "-") {
      this.subtrair();
    } else if(this.operacion == "x") {
      this.multiplicar();
    } else if(this.operacion == "/") {
      this.dividir();
    }
  }

  apagarTudo() {
    this.operacion = "x";
    this.value1 = 0;
    this.value2 = 0;
    this.result = 0;
  }


}
