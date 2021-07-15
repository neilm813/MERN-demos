let x = null;

function getData(num) {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      reject("can't be negative");
    }

    setTimeout(() => {
      resolve(num);
    }, 2000);
  });
}

getData(-5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
