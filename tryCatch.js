// ERROR HANDLING - TRY-CATCH
function divide(a,b){
    try{
        if(b==0){
            throw Error("Arithmetic Error")           //-----> agr ye true hua to fir direct catch ki line chalegi
        }
        console.log(a/b)
    }
    catch(err){
        console.error(err)
    }
}
divide(12,0)