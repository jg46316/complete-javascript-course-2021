'use strict';

//In javascript a map is a datastructure that we can use to map values to keys
//Data are stored in key/value pairs
//In object the keys are strings but in maps the keys could be of any type

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze');
console.log(rest.set(2, 'Lisbon'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
