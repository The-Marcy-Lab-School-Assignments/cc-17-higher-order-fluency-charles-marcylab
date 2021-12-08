//write your code here
const pluralize = (arr) => {
//same amount of elements as new array just changings a bit in info on it. (.map())
  return arr.map((animal) => `${animal}s`);
      //elemeny + "s"
};


const uppercase = (arr) => {
  return arr.map(words => words[0].toUppercase() + words.substr(1));
};

const longWords = (arr) => {
//filter (JUST/ONLY) beause we wnt specific thing from array
//return condition where if element is passing condition return element.
  return arr.filter(el => el.length > 3);
};
//filterLength =
const shortWords = (arr, filterLength) => {
    return arr.filter(el => el.length > filterLength);
};

const oddLength = (arr) => {
    return arr.filter(el => (el.length % 2) === 1);//2 !== 0
};
let animals = ['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
const longToShort = (arr) => {
    // sort least to greatest or alphabitical order
    return arr.sort((a,b) => (a.length - b.length); //ascending order
    //return arr.sort((a,b) => b.length - a.length)//descending order
};
console.log(longToShort(animals))

const sum = (arr) => {
    return arr.reduce((acc, curVal) => acc += curVal);
    //acc= first el of arr[0] is the bucket
    //curVal = sec el in arr[1] what goes in the bucket starting fon [0]
};