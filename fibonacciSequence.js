function fibo(N){
  let i = 0; //iterator 
  let fibon = [0, 1]; //first two fixed numbers in the sequence
  while(i < N) {
    fibon.push(fibon[i]+fibon[i+1]); //add the sum of the previous two numbers into the array
    i++; //increment 
  }

  return fibon;
}
/* Below are my function calls to test 
my fibo function which will return the fibonacci 
sequence to the N-th place. Most online platforms limit this function's call to N=98 after it splices off the remaining numbers.
It reaches an overflow at N=99.*/

fibo(4) // returns an array of size 6 [0, 1, 1, 2, 3, 5]
fibo(23) // returns an array of size 25
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368]
fibo(98) // returns an array of size 100
fibo(500000) /* N=500,000 is the largest fibonacci sequence that Chrome will evaluate on my computer at this time  
                browser crashes at N=500,001. Have not tested on other computers: it may be the browser limitation or hardware limitation.
                I believe it's my hardware on a dated machine */
