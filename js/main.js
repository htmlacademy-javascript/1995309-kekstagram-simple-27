//Функция возвращает случайное целое число из переданного диапазона включительно (подсмотрено в MDN)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); //округление минимального числа диапазона до целого
  max = Math.floor(max); //округление максимального числа диапазона до целого

  if (min >= 0 && max >= 0 && max >= min) { //проверка: числа положительные и max больше min
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  return NaN;
}

//Функция для проверки максимальной длины строки

function getStringLength(string, maxL) {

  if (string.length <= maxL) {
    return true; // Результат: true, если строка проходит по длине
  }

  return false; //результат false, если строка не проходит по длине
}
