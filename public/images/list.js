import Snowman from './snowman-02.svg';

const doors = (() => {
  // create the array of days 1-25
  let doorArray = [
    {
      id: 1,
      image : Snowman
    },
    {
      id: 2,
      image: Snowman
    },
    {
      id: 3,
      image: Snowman
    },
    {
      id: 4,
      image: Snowman
    },
    {
      id: 5,
      image: Snowman
    },
    {
      id: 6,
      image: Snowman
    },
    {
      id: 7,
      image: Snowman
    },
    {
      id: 8,
      image: Snowman
    },
    {
      id: 9,
      image: Snowman
    },
    {
      id: 10,
      image: Snowman
    },
    {
      id: 11,
      image: Snowman
    },
    {
      id: 12,
      image: Snowman
    },
    {
      id: 13,
      image: Snowman
    },
    {
      id: 14,
      image: Snowman
    },
    {
      id: 15,
      image: Snowman
    },
    {
      id: 16,
      image: Snowman
    },
    {
      id: 17,
      image: Snowman
    },
    {
      id: 18,
      image: Snowman
    },
    {
      id: 19,
      image: Snowman
    },
    {
      id: 20,
      image: Snowman
    },
    {
      id: 21,
      image: Snowman
    },
    {
      id: 22,
      image: Snowman
    },
    {
      id: 23,
      image: Snowman
    },
    {
      id: 24,
      image: Snowman
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

