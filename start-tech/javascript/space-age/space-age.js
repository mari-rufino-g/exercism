//
// Dada uma idade em segundos, calcule a idade de alguém:
// Terra: 31557600

const orbitalPeriod = { //Criando um objeto como um dicionario em Python
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
  
export const age = (planet, seconds) => {      // passando a informação sobre o meu objeto. primeiro planeta, depois segundos     
  return +((seconds / orbitalPeriod[planet]) / 31557600).toFixed(2); // divido por 31557600 porque é o valor ref a Terra e garanto que apenas fixe 2 decimais através do toFixed(2).
  }
;