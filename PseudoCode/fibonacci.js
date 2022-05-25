var i;
var fib = [0, 1]; // Initialize array!
for (i = 2; i <= 20; i++) {
  fib.push(fib[i - 2] + fib[i - 1]);
}

console.log(fib.join(" "));
