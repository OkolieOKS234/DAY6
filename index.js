const studentBooking = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const notInList = false;
      if (notInList) {
        reject("Get out of my class");
      } else {
        resolve("Welcome for the class");
      }
    }, 5000);
  });
};
studentBooking()
  .then((success) => console.log(success))
  .catch((notInList) => console.log(notInList));
