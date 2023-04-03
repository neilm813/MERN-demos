function sum(x, y) {
  console.log(x + y);
}

function fn1() {
  let a = 5;
  console.log(a);
  // var a only exists inside the scope of fn1, so if the sum fn needs it, we have to pass it as an argument.
  sum(a, 10);
}

fn1();
