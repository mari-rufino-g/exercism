//
// Mostrar true se ano bissexto e false se nao for
// Ser divisivel por 4 => o resto da divisão por 4 tem que ser 0 
// exceção são os anos multiplos de 100 que nao sao multiplos de 400 => não pode ser divisivel por 100 
// ou seja, o resto da divisão por 100 tem que ser diferente de 0 ou
// o ano ser divisivel por 400 => resto da divisão por 400 tem que ser igual a 0

export const isLeap = (anoteste) => {
  if (anoteste %4 == 0 & anoteste%100 != 0 || anoteste%400 == 0) {
    return true;
  } else {
    return false;
  }
  };


 
