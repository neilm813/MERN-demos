# Promises

- "I Promise to get back to you later with what you requested or an update if something went wrong."
  - "Thanks, now I can go get some work done while waiting to hear back."

## Prerequisites

- [js-function-vs-arrow-outline.md](./js-function-vs-arrow-outline.md)

## Learning Objectives

- Understand what a Promise is and why it is helpful
- When Promises are encountered
- How to handle Promises
  - `.then` vs `await`
- A lot of JR web devs are able to work with promises by mimicking syntax they see but don't have a good understanding of it and easily so they will easily create async / promise related bugs for themselves.

## What is a `Promise`

| Promise State | Explanation |
| ------------- | ----------- |
| Pending       | No response yet, no data to access. |
| Fulfilled     | Responded successfully with the requested data. |
| Rejected      | Responded with an error. Need to `catch` the error to avoid crashing your app. |

## Why is a `Promise` helpful

- A `Promise` is helpful because it allows code to run asynchronously, this means code can run in a different order than just top-down synchronously.
- Asynchronous code allows your app to run code that may take a while, and while waiting for that code, continue running the code below it until the task is complete, at which point your app will jump back to where that `Promise` settled.
- Imagine if every time you had to wait for someone to get back to you, you couldn't get any other work done, you just had to wait.
  - This would be hugely inefficient, same for a program.

## When will you encounter a `Promise`

- If you hover over a function in VSCode, it usually can tell you if the function returns a `Promise`.
- Typically a `Promise` will be encountered whenever you deal with code that makes a request to another app (API, DB, etc) or you call a function that has to do a potentially time consuming task such as reading a big file.
- A `Promise` is **always** returned by any function that is marked with the `async` keyword, but a `Promise` may also be returned by other functions too.
- Whenever you see the keywords `await`, you know a `Promise` is being handled.

  - ```js
    // When I see await being used I can infer getData is returning a Promise
    const data = await getData();
    ```

- Whenever you see a `.then` you know a `Promise` is being handled.

  - ```js
    // When I see a .then, I can infer whatever is before it is a Promise,
    // if a function call is before, that function is returning a Promise.
    getData()
      .then(data => doSomethingWithData(data));

    function doSomethingWithData(info) {
      console.log(info);
    }
    ```

## Placing Multiple Orders Analogy

- Say you need to buy a new workstation to replace your worn down one: a desk, a chair, and a new standing fan for your room, but the stuff that you want each comes from a different retailer.
- Would you place the order for your desk, wait for it to arrive, then place the order for your chair, wait for it to arrive, then place the order for your fan?
  - Of course not, this would make it take way longer to get all of the items. In software this pattern is called a waterfall and it's avoided when possible since it causes extra delay / bottleneck.
  - The solution is obvious, you already effortlessly come up with it without having to think deeply in real life, the same too will happen in code when you get more experience--you place each order at the same time, so that each order ***fulfillment*** center can each start work on ***fulfilling*** the order they ***promised*** you ASAP (or ***reject*** the order if something goes wrong).
  - This means that you may receive your items in any order, the last or second one you placed may arrive first if you placed them all close to the same time, it just depends on which place happens to be less busy and / or faster for whatever reason.
  - The longest it will take to receive every item you ordered, is based on the slowest order, which is still much faster than waiting on each one to complete before even submitting the next order.
  - You can also potentially work with what you get first, if your chair arrives first, you can build it and replace your old chair while waiting for the other items.
  - Even if each item was useless without all the others because they are all parts that need to be connected, it still at least saves time to submit the order for each at the same time.

![waterfall illustration](./sync_vs_async.png)

## Built in `fetch`

- Only available in the browser (js files attached to an HTML file), not available in node.
- Requires an extra step to convert to json that other libraries like `axios` do automatically.

## Pending Promise

```js
const productPromise = fetch('https://fakestoreapi.com/products/13');

/* 
It is pending since we logged it immediately before the API had time to
to respond. We can't do much with it except write code that does something when
it's fulfilled or rejected.
*/
console.log(productPromise);
```

## Example with `.then`

```js
console.log('before requests');

fetch('https://fakestoreapi.com/products/13')
  .then((res) => {
    // res.json() also returns a Promise, that's why we need another .then.
    return res.json();
  })
  .then((product) => {
    doSomethingWithData(product);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('do work while waiting');
console.log('do more work while waiting');
console.log(
  'we can get a lot of work done while waiting for our requests to be responded to'
);

function doSomethingWithData(data) {
  // Do whatever you need to do with the data here.
  console.log(data);
}
```

### Waterfall example with `.then`

```js
console.log('do work before sending requests');

fetch('https://fakestoreapi.com/products/13')
  .then((firstRes) => {
    // res.json() is also async and returns a Promise
    return firstRes.json();
  })
  .then((firstProduct) => {
    doSomethingWithData(firstProduct);

    /* 
    Waterfall pattern. This is bad if it's not needed because we don't submit
    this request until the above one gets a response.
    */
    fetch('https://fakestoreapi.com/products/9')
      .then((secondRes) => {
        return secondRes.json();
      })
      .then((secondProduct) => {
        doSomethingWithData(secondProduct);
      })
      .catch((secondError) => {
        console.log(secondError);
      });
  })
  .catch((firstError) => {
    console.log(firstError);
  });

console.log('do work while waiting');
console.log('do more work while waiting');
console.log(
  'we can get a lot of work done while waiting for our requests to be responded to'
);

function doSomethingWithData(data) {
  // Do whatever you need to do with the data here.
  console.log(data);
}
```

- The same example as above written differently:

```js
console.log('do work before sending requests');

getProduct(13)
  .then((firstProduct) => {
    doSomethingWithData(firstProduct);

    getProduct(9)
      .then((secondProduct) => doSomethingWithData(secondProduct))
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));

console.log('do work while waiting');
console.log('do more work while waiting');
console.log(
  'we can get a lot of work done while waiting for our requests to be responded to'
);

function getProduct(id) {
  // Return the Promise so code that calls this function can choose how to
  // handle the Promise.
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
    // res.json() is also async and returns a Promise
    return res.json();
  });
}

function doSomethingWithData(data) {
  // Do whatever you need to do with the data here.
  console.log(data);
}
```

### Avoiding a waterfall pattern with `.then`

```js
console.log('do work before sending requests');

// Send both requests right away so they don't wait on each other.
// save the pending promise into a variable so we can handle it.
// it's unknown which will finish first.
const firstProductPromise = getProduct(13);
const secondProductPromise = getProduct(9);

/* 
Promise.all is similar but if a single promise is rejected it is all rejected.

allSettled works if some are fulfilled and some are rejected and gives you that
a report with that info.

allSettled also returns a Promise that is pending until all the Promises are
either fulfilled or rejected (settled).

The promises can settle in any order, but allSettled will return them in the
order they were given.
*/
Promise.allSettled([firstProductPromise, secondProductPromise])
  .then((outcomes) => {
    doSomethingWithData(outcomes);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('do work while waiting');
console.log('do more work while waiting');
console.log(
  'we can get a lot of work done while waiting for our requests to be responded to'
);
```

## `await` vs `.then`

- Using `await` gives you data that would have been given to you in your `.then`.
- `await` means the line below it will NOT run until the awaited `Promise` settles so you can more easily choose where you want your code to be synchronous or asynchronous by choosing when to put the `await` on.
- With `.then` you cannot prevent the lines of code below the `.then` it from running.
- This means with `await` it is easier, if you don't understand it, to cause unnecessary delays / bottlenecks by using `await` prematurely.
- Using `await` inside a `for` loop will prevent the next iteration from running until the `Promise` in the current iteration settles.
- Using `.then` inside a loop will allow the loop to continue to the next iteration and then the `.then` callbacks from the loop will be executed in whatever order the promises settle.
- You can always choose to not use the `await` keyword so you can choose to `await` later on (e.g., after a loop instead of inside).

## Waterfall example with `async` `await`

```js
console.log('do work before sending requests');

// since we aren't doing await main() we can still do work while waiting.
main();

console.log('do work while waiting');
console.log('do more work while waiting');
console.log(
  'we can get a lot of work done while waiting for our requests to be responded to'
);

/* 
await can only be used inside an async function so we need to wrap everything
in an async function so we can use await.

In some js environments you don't need to do this.
*/
async function main() {
  try {
    // With await, it's easy to accidentally create a waterfall.
    // secondProduct request doesn't start until first product response happens.
    const firstProduct = await getProduct(13);
    console.log(firstProduct);
    const secondProduct = await getProduct(9);
    console.log(secondProduct);
  } catch (error) {
    console.log(error);
  }
}
```

### Avoiding a waterfall pattering with `await`

```js
async function main() {
  try {
    /* 
    Don't await initially so we can send both requests right away.
    However, since we didn't await, we now have a Promise in our vars.

    These Promises can settle in any order, but allSettled returns them in the
    order they were given.
    */
    const firstProductPromise = getProduct(13);
    const secondProductPromise = getProduct(9);

    const settledProductPromises = await Promise.allSettled([
      firstProductPromise,
      secondProductPromise,
    ]);
    console.log(settledProductPromises);
  } catch (error) {
    console.log(error);
  }
}
```

## When should you use a waterfall / synchronous pattern?

- When you cannot make your second request without using data from your first request.
  - E.g., if you get a `user` and and the user's related comments, you may need to first get the user which contains an array of comment ids, then use those comment ids and get each comment.
    - In this case, the waterfall would just be waiting for the user before sending off every request for every comment at the same time instead of waiting for the 1st comment before requesting the 2nd comment which would keep the waterfall going more than is needed.
    - However, before you make many individual requests for many entities, you should first investigate if there is another way to get the data you want, for example, you use the user id to get the user, but maybe there is an endpoint `/users/id/comments` which only needs the user id and gives you all the comments for that user, if this exists (it doesn't always) it is better than sending many requests to get the comments and you can then send the request for the user at the same time as requesting the user's comments.
