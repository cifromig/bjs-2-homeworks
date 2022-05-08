"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discreminant;
  discreminant = b**2-(4*a*c); 

  if (discreminant < 0 ) {
    arr = []}
  else if (discreminant == 0 ) {
    let koren1 = -b/(2*a);
    arr = [koren1];
  }
  else if ( discreminant > 0 ) {
    let koren1 = (-b + Math.sqrt(discreminant) )/(2*a);
    let koren2 = (-b - Math.sqrt(discreminant) )/(2*a);  
    arr = [koren1, koren2] ;
    
  }
   return arr; // array
}
function calculateTotalMortgage(percent, contribution, amount, date) {  // процентную ставку, сумму первоначального взноса, сумму кредита и срок (дату окончания кредита) 

    function monthDiff(d1, d2) {
      let months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth() //+ 1;
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
  }

  let totalAmount;
   if (isNaN(percent/1)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"` ;
   }
    else if (isNaN(contribution/1)) {
          totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"` ;
        }

    else if (isNaN(amount/1)) {
      totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
  // contribution
  // amount
  // date

    else {

      let S = amount - contribution;
      // let P = (percent/100)*(1/12)
      let P = (percent/100)*(1/12)

      let data2 = new Date()
      let data1 = new Date(date)
      // let n = data2 - data1
      
      let n = monthDiff( data2, data1);

      totalAmount = (S * (P + (P / (((1 + P)**n) - 1))))*n
      totalAmount = (Math.round(totalAmount*100)/100)
      console.log (totalAmount)
    }

  return totalAmount;
}
