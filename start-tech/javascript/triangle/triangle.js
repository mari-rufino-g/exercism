//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle { // exportando a classe triangulo e nao mais variavel
  sideA;
  sideB;
  sideC;

  constructor(...sides) { // array - uma lista - tres pontinhos são spread
    this.sideA = sides[0]; //referencia que estou chamando um atritubuto do objeto triangulo
    this.sideB = sides[1];
    this.sideC = sides[2];
    this.sides = sides;
  }

  get isAllSidesBiggerThan0() {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;  //tem que usar o this se nao ele vai tentar achar o sideA dentro deste bloco
  }

  get triangleInequality() { //encurto o if/else dando um return direto 
    return this.sideA <= (this.sideB + this.sideC) && this.sideB <= (this.sideC + this.sideA) && this.sideC <= (this.sideA + this.sideB) ; //  regra (https://en.wikipedia.org/wiki/Triangle_inequality)
  }

  get isValid() {
    return this.isAllSidesBiggerThan0 && this.triangleInequality;
  }

  get isEquilateral() { //tres lados iguais
    return this.isValid && (this.sideA === this.sideB && this.sideB === this.sideC);
  }

  get isIsosceles() { //pelo menos dois lados iguais
    return this.isValid && (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
  }

  get isScalene() { //tres lados diferentes
    return this.isValid && (this.sideA !== this.sideB && this.sideA != this.sideC && this.sideB !== this.sideC);
  }
}
