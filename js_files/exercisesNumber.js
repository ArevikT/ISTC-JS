//task 1    
   function changeNumber(number,decimle) {

      if (typeof (number) === "number" && typeof(decimle) === "number") {
     
        return number.toFixed(decimle) ;
      }
  }
   console.log(changeNumber(4.25697,3));
//task 2
  function naturalNumber(param) {
 
    if (param > 0 && Number.isInteger(param)== true) {

      return "is natural number"; 

        } else {
      return "is not natural number" ;
     }
  
  }              
 console.log(naturalNumber(5));
