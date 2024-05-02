// CLOUSERS

// ek funn jo return kare dusra funn aur use kare parent funn ka koi variable
function abcd(){
    var a = 12;
    return function(){
        a++
        console.log(a)
    }
}
const ans = abcd()
ans()
