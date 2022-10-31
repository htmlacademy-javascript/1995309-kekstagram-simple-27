//Функция возвращает случайное целое число из переданного диапазона включительно
function getRandomIntInclusive(min, max) {

  //Если значения меньше нуля, возвращаем NaN
  if (min < 0 || max < 0) {
    return NaN;
  }

  //Округляем значения + определяем min и max (избавляем пользователя от необходимости вводить значения в правильном порядке)
  const minRound = Math.ceil(Math.min(min, max));
  const maxRound = Math.floor(Math.max(min, max));

  //Получаем случайное число и приводим к нужному диапазону
  const result = Math.random() * (maxRound - minRound + 1) + minRound;

  //Возвращаем округлённый результат вычислений
  return Math.floor(result); //Максимум и минимум включаются
}

//Функция для проверки максимальной длины строки
function getStringLength(string, maxL) {

  return string.length <= maxL; //Возвращает true, если длина строки в пределах максимального значения
}

getStringLength('Hello!', 100);

//Массив с описаниями
const PHOTO_DESCRIPTIONS = [
  'Испытание нового квадрокоптера',
  'Моё любимое время суток',
  'Моя стопицотая фотка сегодня. Парень дал поносить его фотик))',
  'Мимо проходила и сфоткала. И каким ветром ЭТО занесло в наши края???',
  'День 17...',
  'Это было... громко!)',
  'А это я купила на Авито сегодня! Правда, клёвская?))',
  'Первая фотка на новенький пинхол. Каааааайф!',
  'Хочу себе такую же, только красненькую))',
  'Тестирую новый фотик. Ну клёво,чё',
  'Наконец-то купил себе нормальный объектив для макросъёмки!',
];

//Константы диапазонов
const PHOTO_COUNT = 25;

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

//Получение рандомного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

//Функция, создающая объект с описанием фотографии
const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomIntInclusive(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX)
});

//Функция создания массива объектов
const getPhotoDescriptions = () => {
  Array.from({length: PHOTO_COUNT}, (_, index) => createPhotoDescription(index + 1));
};

getPhotoDescriptions();
