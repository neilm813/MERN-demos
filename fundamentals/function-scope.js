let global = 'global';

// fn1 is a block of code with it's own scope.
function fn1() {
  // fn1 is inside the global scope so it has access to globally-scoped vars.
  console.log(global, 'from nested fn1 scope');

  let function1Scope = 'function1Scope';

  // Inside this if block scope we can access the parent scopes: fn1 and global
  if (true) {
    console.log(function1Scope, 'from inside if statement');
    // This var is scoped to this if block only, it cannot be accessed outside.
    let x = 5;
    var y = 10;
    // The 'var' keyword 'hoists' the var declaration to the top of the
    // function making it available to the whole function scope.
  }

  // Error: x is not defined in this scope.
  // console.log(x);
  console.log('y:', y);

  console.log(function1Scope);
}

fn1();

let x = 5;
x = 6;
