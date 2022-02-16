const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greaterHey = greet('Hey');

greaterHey('Jonas');
greaterHey('Jasmin');

greet('Hello')('Jasmin');

// Arrow function greet

const greatArr = greeting => name => console.log(`${greeting} ${name}`);
greatArr('Hello')('Jasminsss');
