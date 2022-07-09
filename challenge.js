let promise = new Promise((resolve, reject) => {
  //   userData = {
  //     name: "john",
  //     occupation: "Forex Trader",
  //   };
  document.querySelector("input").addEventListener("input", () => {
    setTimeout(() => {
      const User = document.querySelector(".name_inp").value;
      const Age = document.querySelector(".age_inp").value;
      if (User === "David" && Age >= 18) {
        reject({
          name: User,
          age: Age,
        });
      } else {
        resolve("You are not qualified");
      }
    }, 5000);
  });
});

promise
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
