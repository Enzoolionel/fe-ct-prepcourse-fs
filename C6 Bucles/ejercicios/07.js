function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:

  if (a % 2 == 0 && a % 3 === 0) return true;

  if (a % 2 == 0 && a % 3 !== 0)
    return `${a} Es par pero no es divisible por 3`;

  if (a % 2 !== 0 && a % 3 === 0)
    return `${a} Es divisible por 3 pero no es par`;

  return false;
}

module.exports = esParYDivisiblePorTres;
