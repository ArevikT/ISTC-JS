//task 1
function greeting(str,n) {
    if (n > 0) {
       return str.repeat(n);    
    } else {  return str.repeat(2) ;}
}  
    console.log(greeting("Helo Worlld! ", 5)) ;

//task 2
var arr = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6];
var arr1 = [];
  function newArray(array){
      for (var i = 0; i < arr.length; i++) {
       if (Array.isArray(arr[i])==true) {
           arr1 = arr1.concat(arr[i]);
       } else { continue; }    
      }
         return arr1;
  }  
     console.log(newArray(arr)) ; 
//task 3
function palindromeWord(str) {
 if( str === str.split("").reverse().join("")){
     return "This is palindrome word";
 }  else { return "This is not palindrome word" ;}

}         
       console.log(palindromeWord("arev"));   

