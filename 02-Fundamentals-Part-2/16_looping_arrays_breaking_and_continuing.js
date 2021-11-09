const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0;i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    types[i] = typeof jonas [i]
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i=0; i< years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('------ ONLY STRINGS ----')
for (let i = 0;i < jonas.length; i++) {
    // Reading from jonas array
    if( typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
  
}


console.log('------ BREAK WITH NUMBER ----')
for (let i = 0;i < jonas.length; i++) {
    // Reading from jonas array
    if( typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
  
}