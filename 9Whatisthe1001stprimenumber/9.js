let Primenumbers = 0;
for (dividend = 2; Primenumbers < 1001; dividend++) {
  let isprime = true;
  for (divider = 2; dividend > divider ; divider++) {
    if (dividend % divider == 0) {
      isprime = false;
      break;
    };
  };
  if (Boolean(isprime)) { 
    Primenumbers++;
  }
};
document.write("The 1001st prime number is: ");
document.write(--dividend + '<br><br>');