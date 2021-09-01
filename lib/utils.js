export const waitForOpenConnection = (socket, maxNumberOfAttempts = 10) => {
  return new Promise((resolve, reject) => {
    const intervalTime = 200;
    let currentAttempt = 0;
    const interval = setInterval(() => {
      console.log(`attempt ${currentAttempt}`);
      if (currentAttempt > maxNumberOfAttempts - 1) {
        clearInterval(interval);
        reject(new Error("Maximum number of attempts exceeded"));
      } else if (socket.readyState === socket.OPEN) {
        console.log("open");
        clearInterval(interval);
        resolve();
      }
      currentAttempt++;
    }, intervalTime);
  });
};
