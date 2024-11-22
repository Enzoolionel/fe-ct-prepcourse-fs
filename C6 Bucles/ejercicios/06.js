function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  //! Tambien se puede hacer asi
  //* if (num >= 100 && num <= 999) return true;

  let countNumber = num.toString().split("");

  if (countNumber.length === 3) {
    return true;
  }

  return false;
}

module.exports = tieneTresDigitos;
