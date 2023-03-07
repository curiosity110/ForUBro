const users = [{name: 'Peter', age: 20}, {name: 'John', age: 30}, {name: 'Alice', age: 25}];

export const getUsersFromDb = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.35) {
        resolve(users);
      }
      reject(new Error('Something went wrong'));
    }, 1000);
  } ); 
};
