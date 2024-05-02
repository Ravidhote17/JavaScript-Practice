// FUNCTION
function table(){
    var a = 2;
    while(a<=20){
        console.log(a)
        a = a+2 
    }
}
table()

// FUNCTION WITH PARAMETER
function sum(a,b){
    console.log(a+b)
}
sum(57,34)

// FAT ARROW FUNCTION
var a = ()=>{
    for(var i=0; i<10; i++){
        console.log(i)
    }    
}
a()

// FAT ARROW FUNCTION WITH PARAMETER
var b = (age)=>{
    if(age===18){
        console.log("hehe")
    }
    else{
        console.log("haha")
    }
}
b(18)

// RETURN
function reverse(){
    var a = 10;
    if(a === 10){
        return("Hey!")
    }
}
var rev = reverse()
console.log(rev)

// RETURN WITH FAT ARROW FUNCTION AND PARAMETER
var a = (i)=>{
    return i;
}
var ans = a(15)
console.log(ans)