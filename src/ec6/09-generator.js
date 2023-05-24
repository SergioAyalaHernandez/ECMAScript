function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['ana','pep','ser','lin']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);