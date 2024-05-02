// CALL - kisi bhi value ko as parameter de sakte h apne function me as a this ki value
const obj1= {name: "Ravi"}

function adcd(){
    console.log(this)
}
adcd.call(obj1)                  //OR adcd.call(12)--->[Number: 12]

// APPLY - isme this value ke sath dusre parameters ki bhi value de skte h as a array
const obj2 = {name: "Ravi"}

function abcd(a,b,c){
    console.log(this,a,b,c)
}
abcd.apply(obj2,[2,4,6])

// BIND - Bind ek dusra function de dega jisko hum call krke baad me hamara puraana funn chala skte hai
const obj = {name: "Ravi"}

function abcd(){
    console.log(this)
}
bindFunction = abcd.bind(obj)               //-----> ye nhi chalega, isko chalane ke liye bind funn call krna hoga
bindFunction()                             //------> ab ye funn chalega
