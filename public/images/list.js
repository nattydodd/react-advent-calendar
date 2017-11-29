import Snowman from './snowman-02.svg';
import Bear from './bear.svg';
import Yule from './yule.svg';
import Bell from './bell.svg';

const doors = (() => {
  // create the array of days 1-25
  let doorArray = [
    {
      id: 1,
      image : Snowman
    },
    {
      id: 2,
      image: Bear
    },
    {
      id: 3,
      image: Yule
    },
    {
      id: 4,
      image: Bell
    },
    {
      id: 5,
      image: Snowman
    },
    {
      id: 6,
      image: Bear
    },
    {
      id: 7,
      image: Yule
    },
    {
      id: 8,
      image: Bell
    },
    {
      id: 9,
      image: Snowman
    },
    {
      id: 10,
      image: Bear
    },
    {
      id: 11,
      image: Yule
    },
    {
      id: 12,
      image: Bell
    },
    {
      id: 13,
      image: Snowman
    },
    {
      id: 14,
      image: Bear
    },
    {
      id: 15,
      image: Yule
    },
    {
      id: 16,
      image: Bell
    },
    {
      id: 17,
      image: Snowman
    },
    {
      id: 18,
      image: Bear
    },
    {
      id: 19,
      image: Yule
    },
    {
      id: 20,
      image: Bell
    },
    {
      id: 21,
      image: Snowman
    },
    {
      id: 22,
      image: Bear
    },
    {
      id: 23,
      image: Yule
    },
    {
      id: 24,
      image: Bell
    },
    {
      id: 25,
      image: Snowman
    },
  ];

  // then shuffle the array
  let m = doorArray.length; //25
  let t;
  let i;

  while (m) {
    m--
    i = Math.floor(Math.random() * m);

    t = doorArray[m];
    doorArray[m] = doorArray[i];
    doorArray[i] = t;
  }

  return doorArray;

})();

export default doors;

