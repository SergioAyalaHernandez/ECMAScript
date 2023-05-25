const fnAsync = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Async'),2000)
        : reject(new Error('!error'));   
    });
}


const anotherFunction = async () =>{
    const algo = await fnAsync();
    console.log(algo);
    console.log('algo');
}

console.log('Before');

anotherFunction();

console.log('After');