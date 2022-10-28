//Функция возвращает случайное целое число из переданного диапазона включительно (подсмотрено: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomIntInclusive(min, max) {

  //Если значения меньше нуля, возвращаем NaN
  if (min < 0 || max < 0) {
    return NaN;
  }

  //Округляем значения + определяем min и max (избавляем пользователя от лнеобходимости вводить значения в правильном порядке)
  const minRound = Math.ceil(Math.min(min, max));
  const maxRound = Math.floor(Math.max(min, max));

  //Получаем случайное число и приводим к нужному диапазону
  const result = Math.random() * (maxRound - minRound + 1) + minRound;

  //Возвращаем округлённый результат вычислений
  return Math.floor(result); //Максимум и минимум включаются
}

//Функция для проверки максимальной длины строки (подсмотрено: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length)

function getStringLength(string, maxL) {

  return string.length <= maxL; //Возвращает true, если длина строки в пределах максимального значения
}

getStringLength('Hello!', 100);

//Функция, создающая объект с описанием фотографии
const createPhotoDescription = () => {

  //Переменные случайных чисел
  const randomPhotoNumber = getRandomIntInclusive(1, 25);
  const likesRandomNumber = getRandomIntInclusive(15, 200);
  const commentsRandomNumber = getRandomIntInclusive(0, 200);

  //Структура объекта с описанием фотографии
  return {
    id: randomPhotoNumber,
    url: `photos/${randomPhotoNumber}.jpg`,
    description: '',
    likes: likesRandomNumber,
    comments: commentsRandomNumber
  };
};

createPhotoDescription();
