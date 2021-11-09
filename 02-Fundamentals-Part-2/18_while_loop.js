
// Whenever we need a loop without a counter we use a WHILE LOOP
let rep = 1;
while( rep <= 10) {
    console.log(`WHILE:Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice ===6) console.log(`Loop is about to end..`);
}