// Defining an anonymous arrow expression that simply logs a string to the console.
console.log(() => console.log("Shhh, Im anonymous"));

// Defining a named function by creating an arrow expression and saving it to a const variable anonymous.

const anonymous = (string) => {
  console.log(string);
};

// Calling the anonymous() function.
anonymous("Im anonymous, a function that is not named");
