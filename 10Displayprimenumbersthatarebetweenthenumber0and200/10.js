function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for(var i = 0; i < 200; i++){
    if(isPrime(i)) console.log(i);
}

/*HTMLtable = "<table><tr><th colspan='50'>Prime Numbers between 0 and 200<tr><td>1"
      let primesFound = 0
      for (dividend = 2; dividend <= 200; dividend++) {
        let isprime = true
        for (divisor = 2; divisor < dividend ; divisor++) {
          if (dividing % divisor == 0) {
            isprime = false
            HTMLtable += "<td>" + dividend
            break
          }
        }
        if (Boolean(isprime)) {
          HTMLtable += "<td bgcolor='#00FF00'>" + dividend;
          primesFound++;
        }
        dividend % 20 == 0 ? HTMLtable += "<tr>" : false
      }
      HTMLtable += "</table>"
      document.write(HTMLtable)
      document.write('Crossins Found: ' + primesFound+ '<br>')*/