//flat

const array = [1,2,3,4,1,[1,2,3,4,[1,43,7,8]]];

console.log(array.flat(3));

// flatMap

const array2 = [1,2,3,4,1];

console.log(array2.flatMap(v => [v, v * 2]));

