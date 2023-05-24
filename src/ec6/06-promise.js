const { response } = require("express");

const anotherfunction = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('ey!!');
        }else{
            reject("negh!!");
        }
    })
}

anotherfunction().
then(
    response => console.log(response)
).catch(
    err => console.log(err)
)