//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dataReferencia) => {
  var dataEmMiliSegundos = dataReferencia.getTime(); //Pegando n de milisegundos da dataReferencia desde 1970
  var dataComGigasegundo = dataEmMiliSegundos + 1e9 * 1000; //Somando 1gigasegundo e multiplica por mil por ser milisegundo
  return new Date(dataComGigasegundo); //transformando o numero de milisegundos (datacomgigasegundo) para um objeto date
};


