//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  selecaoDeNumeros
  constructor(numero) {
    this.numero = numero;
    this.selecaoDeNumeros = [];
    let contador = 1;
  
    while (contador <= numero) {
      this.selecaoDeNumeros.push(contador++); //armazenar numa array
    }
  }

  get sumOfSquares() {
    let somaDosQuadrados = this.selecaoDeNumeros.map(function(item) {
      return Math.pow(item, 2); //retorna o item elevado ao quadrado
    })
    let tirarDaArray = somaDosQuadrados.reduce((tirarDaArray, currentElement) => tirarDaArray + currentElement) //soma dos elementos da array 
    return tirarDaArray;
  }

  get squareOfSum() {
    let somaDaArray = this.selecaoDeNumeros.reduce((somaDaArray, currentElement) => somaDaArray + currentElement) //soma dos elementos da array
    let quadradoDaSoma = Math.pow(somaDaArray,2); //(1 + 2 + ... + 10)² 
    return quadradoDaSoma;
  }

  get difference() {
    let diferencaDaSoma = this.squareOfSum - this.sumOfSquares;
    return diferencaDaSoma;
  }
}

