let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const Daddys_promise = true;
    if (Daddys_promise) {
      resolve("Daddy thanks for fufilling your promise");
    } else {
      reject("Daddy you made fake promises");
    }
  }, 31556926000);
});

promise.then((success) => console.log(success)).catch(() => console.log(error));
