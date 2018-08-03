function factorPrimes(N){
  
    let pF = [];
    while (N % 2 === 0) {
      
        N /= 2;
    }
    
    let sqrtNum = Math.sqrt(N);
    for (let i = 3; i <= sqrtNum; i++) {
        while (N % i === 0) {
            pF.push(i);
            N /= i;
        }
    }

    if (N > 2) {
        pF.push(N);
    }
    return pF;
}

factorPrimes(8)
