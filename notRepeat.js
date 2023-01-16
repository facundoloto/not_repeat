
function not_repeat(text, repeat) {
  /* si el text está vacío y/o la cantidad de repetat es 0 la respuesta es un advertencia */
  if (text == '' && repeat == 0 || text == "" || repeat == 0) {
    return 'ingrese un texto y un numero mayor a 0';
  }

  let result = '';
  let characters_repeat = 1
  /*
  ** por defecto la cantidad de caracteres consecutivos es solo 1 
  ** ya que luego va verificar si se repite o no 
  */
 
  for (let i = 0; i < text.length; i++) {

    if (text[i] === text[i + 1]) {
      /*si el caracter es igual al que la sigue se repite por eso lo almaceno como contador*/
      characters_repeat++;
    } else {
      /*si no cumple esa condicion sigue en uno ya que no se repite el caracter siguiente */
      characters_repeat = 1;
    }

    /*verifico que los caracteres no se repita mas que la cantidad que se ingreso */
    if (repeat >= characters_repeat) {
      /*almaceno como acumulador a la variable global result para enviar al usuario */
      result += text[i];
    }

  }

  return result;
};

console.log(not_repeat("HOOLLLLAAA MUUUUUNNNDO ", 2));
