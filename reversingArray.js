/* This is an attempt to reverse an
   array without using the built-in method*/

function reverseArray(arr) {
 //we don't want to mutate the original array
  let newArr = [];
  
  //i decided to use an iterator method to practice a bit more 
  arr.forEach(arr => {
  /*i used unshift, because it adds the current item to the beginning of the new array
    which essentially reverses the original array */
    newArr.unshift(arr);
    return newArr;
  })
	return newArr;
}
//tests below
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))

const sentence2 = ['wise.', 'are', 'You'];

console.log(reverseArray(sentence2))
