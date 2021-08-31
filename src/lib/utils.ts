/**
 * turn websocket into promise
 * @param socket
 * @returns
 */
export const waitForOpenConnection = (
  socket: WebSocket,
  maxNumberOfAttempts: number = 10
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const intervalTime = 200; //ms

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
