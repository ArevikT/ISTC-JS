//task 1
var fruits = ["Banana", "Orange", "Apple", "Mango"];     
function newFruts(arr, param) {
   if (arr.length >= param) {
      arr.length = param ; 
        return arr;
   } else {
       return "your array short"
   }       
}   
   console.log(newFruts(fruits,3)); 
//task 2
var arr = [7,"a","a","a",2,7,"a",7,"a",2,4,9,7] ;
var count = []; 
for (var i = 0; i < arr.length; i++){  
   var counter = 0;
for (var j = i; j < arr.length; j++) {
        if( arr[i] === arr[j] ) {
           counter ++;    
       }  
       
   }  count.push(counter);
  
}     console.log(count);
     count.sort(function(a, b){return b - a}); 
     console.log(count[0]);
     
   
//task 3
var arr = [3,2.3,4.2,6,8,2,5] ;    
var sum = 0;
var multip = 1;
   for (var i = 0; i < arr.length; i++){
       if(Number.isInteger(arr[i]) == true){
           sum = sum + arr[i];
           multip = multip* arr[i];
       }
   }     
     console.log(sum + " " + multip);
//task 4 
var arr = [2,5,7,16,2,1,3,5] ;
          
for (var i = 0; i < arr.length; i++){
  for (var j = i+1; j < arr.length; j++) {
         if( arr[i] == arr[j] ) {
             arr.splice(j,1);
         }
         
      }  

}            console.log(arr);
//task 5    
var arr = [0,1,2,3,4,5,6,7,8,9] ;
arr.sort(function newArr(){return Math.random()-0.1;} ;
)

  console.log(arr);
