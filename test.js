const testFunction = async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("done");
        resolve("done resolve");
      }, 1000);
    });
    return "done testFunction";
  } catch (e) {
    console.error(e);
    reject(e);
  }
};

const a = Promise.resolve(testFunction());
a.then(console.log);
