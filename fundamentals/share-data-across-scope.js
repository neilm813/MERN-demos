function fn2(num) {
  console.log('fn2 param num:', num);
  fn3(num);
}

function fn3(x) {
  console.log('fn3 param x:', x);
}

fn2(5);
