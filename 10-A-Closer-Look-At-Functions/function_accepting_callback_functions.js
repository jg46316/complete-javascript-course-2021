const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

// High order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(` Transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('H');
};

document.body.addEventListener('click', high5);

['jonas', 'marta', 'adam'].forEach(high5);
