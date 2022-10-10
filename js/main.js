//Функция возвращает случайное целое число из переданного диапазона включительно (подсмотрено: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); //округление минимального числа диапазона до целого
  max = Math.floor(max); //округление максимального числа диапазона до целого

  if (min >= 0 && max >= 0 && max >= min) { //проверка: числа положительные и max больше min
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  return NaN;
}

getRandomIntInclusive(8, 25);

//Функция для проверки максимальной длины строки (подсмотрено: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length)

function getStringLength(string, maxL) {

  if (string.length <= maxL) {
    return true; // Результат: true, если строка проходит по длине
  }

  return false; //результат false, если строка не проходит по длине
}

getStringLength('Hello!', 100);
