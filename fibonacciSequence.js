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
sequence to the N-th place. This platform limits
the calls to N=98 after it splices off the remaining numbers*/

fibo(4)
