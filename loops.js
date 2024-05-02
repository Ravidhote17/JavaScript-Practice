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
function func() {
    const items = [1, 29, 47];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    });
    console.log(copy);
    }
    func();
    