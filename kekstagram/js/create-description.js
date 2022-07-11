import { getRandomInt } from '../js/utils.js';

const PHOTO_DESCRIPTION_AMOUNT = 25;
const cardPhotos = [];
const comments = [];

const photosDescriptions = ['Замечательный лес', 'Красивые обои', 'Зеленый стул', 'Белая батарея', 'Оранжевая куртка'];
const commentMessages  = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  const commentsNames = ['Агафон', 'Гамлет', 'Нильс', 'Игорь', 'Вилена', 'Жасмин', 'Корнелия', 'Марина', 'Мирон', 'Платон', 'Октябрина', 'Роман', 'Мия', 'Селена', 'Тимур', 'Чарльз', 'Ярослав', 'Таисия', 'Юлия',]

const getRandomElement = (array, minNumber, maxNumber) => {
  const randomElement = array[getRandomInt(minNumber, maxNumber)];

  return randomElement;
};


const generateComments = () => {
  for(let i = 0; i < 100; i++) {
    const commentItem = {
      id: getRandomInt(`${i}`, 500),
      avatar: 'img/avatar-`${i}.svg',
      message: getRandomElement(commentMessages, 1,  3),
      name: getRandomElement(commentsNames, 0, commentsNames.length - 1)
   }

   comments.push(commentItem);
  }
};

const createPhotoDescription = () => {
  for(let i = 0; i < PHOTO_DESCRIPTION_AMOUNT; i++) {
    const newDescription = {
      id: `${i + 1}`,
      url: `photos/${i + 1}.jpg}`,
      description: getRandomElement(photosDescriptions, 0, photosDescriptions.length - 1),
      likes: getRandomInt(15, 200),
      comment: comments.slice(0, getRandomInt(1, 500)),
    
    
    }

    cardPhotos.push(newDescription);
  }
};


generateComments();
createPhotoDescription();
console.log(cardPhotos)

