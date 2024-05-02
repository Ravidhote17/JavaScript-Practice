// THIS - KEYWORD [value of THIS in df possibilities]

// global - window
console.log(this)

// function scoped - window
function ravi(){
    console.log(this)
}
ravi()

// method - Object
var obj1 = {
    name: function(){
        console.log(this)
    },
    age: 25,
    email: "rv@gmail.com"
}
// obj.name()

// function inside method (es5) - window
var obj2 = {
    sayName: function(){
        console.log(this)               //-------------------> obj
        function childFunn(){
            console.log(this)           //-------------------> window
        }
        childFunn()
    }
}
obj2.sayName()

// function inside method (es6) - Object
var obj3 = {
    tellName: function(){
        const child = ()=>{             //-------> arroe funn parents se value leta h, that's why it obj
            console.log(this)
        }
        child()
    }
} 
obj3.tellName()

// constructor function - new blank Object
function add(){
    console.log(this)
}
const ans2 = new add();                  //---------> new keyword se funn call karne se blank obj [add {}] create ho jata h

// In event listner - jispar event listner laga ho
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this)
})
