// FOR 
for(var i=0; i<10; i++){
    console.log(i)
}

// WHILE
var a = 2;
while(a<=20){
    console.log(a)
    a = a+2
}

// DO WHILE
var a = 10;
do{
    a--;    
    console.log(a)
}while(a>1)

// FOR EACH
var arr = [28,52,36,71,14,52]
arr.forEach(function(val){
    console.log(val+5)
})