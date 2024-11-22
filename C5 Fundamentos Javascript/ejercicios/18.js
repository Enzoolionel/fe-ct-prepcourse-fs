function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo:
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

  const vocales = ["a", "e", "i", "o", "u"];

  if (vocales.includes(letra)) return `${letra} es una vocal`;

  return `${letra} no es una vocal`;
}

module.exports = esVocal;
