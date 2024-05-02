//  Types = Reference || Primitive

// Reference = String, interger, boolean, float, null, undefined etc
// Primitive = [], {}, ()


// Reference variable
var a = [5,36,14,95]
var b = a
b.pop()
console.log(a)
console.log(b)

// Spread Operator
var a = [5,36,14,95]
var b = [...a]
b.pop()
console.log(a)
console.log(b)