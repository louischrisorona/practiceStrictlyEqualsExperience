/* Formula that calculates mortgage payments and amortization schedule
  given the following:
  interest rate -> R
  principal -> P
  term in months -> N
  */
  
  /*Amortization is calculated using the monthly payment and remaining balance
      you use the balance to calculate the interest for that period, and then
      subtract the interest amount from the monthly payment to get the principal paydown.
      The principal paydown is then subtracted from the remaining balance. */
  
function calculateMortgage(P, R, N) {
  let r = R/12;
  
  return P * ((r * Math.pow((1+r),N))/(Math.pow((1+r),N)-1))
}

function amortizedPayments(P, R, N){
  let payment = parseFloat(calculateMortgage(P,R,N).toFixed(2));
  let interest = R/12;
  let balance = parseFloat((payment*N).toFixed(2));
  let principal;
  let rate;
  let schedule = [[payment, interest*balance, payment-interest*balance, balance]];
    for(let i = 1; i<N; i++){
      rate = parseFloat((interest * balance).toFixed(2))
      principal = parseFloat((payment - rate).toFixed(2));
      balance = parseFloat((balance - payment).toFixed(2));
      schedule.push([payment, rate, principal, balance]);
    }
  return schedule;
}

  const period = amortizedPayments(300000, 0.0625, 180); //evaluate the function into a variable to access output
  console.log(`Your payment will be $${period[0][0]}`)
  console.log(`Your interst varies, but 1st payment interest is $${period[1][1]}`)
  console.log(`Your principal pay down also varies, but on first payment is $${period[1][2]}`)
console.log(period[120]) //show amortization schedule at payment 120:10th year
