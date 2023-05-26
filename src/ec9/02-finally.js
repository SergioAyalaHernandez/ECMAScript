

const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if (false){
            resolve('resolve');
        }else{
            reject('reject');
        }
    })
}

anotherFunction()
    .then(response  => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('finnaly'));