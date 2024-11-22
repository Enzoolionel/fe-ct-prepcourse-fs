function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo:
  // "hello world" ---> "hello world!"
  // Tu código:

  //! Tambien se puede hacer de esta manera
  //* return str + "!";

  let strSeparado = str.split("");
  strSeparado.push("!");
  let strFinal = strSeparado.join("");

  console.log(strFinal);

  return strFinal;
}

module.exports = agregarSimboloExclamacion;
