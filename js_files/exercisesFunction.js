//task 1-exemplar 1:

   /*     function calculator( num1, simbol, num2) { 

switch (simbol) {
     case "+" :
          return num1 + num2;
     case "-" :
         return num1 - num2;
     case "*" :
         return num1 * num2;
     case "/" : 
              return num1 / num2;
     case "%" :
         return (num1 * num2)/100;
     default:
        return "sory";
  }
}
            console.log(calculator(15,"/",5)); 

//task 1- exemplar 2:
  function calculator(num1, simbol, num2) {
        if (simbol == "+") {
            return num1 + num2;
        } else if (simbol == "-") {
            return num1 - num2;
        } else if (simbol == "*") {
            return num1 * num2;
        } else if (simbol == "/" && num2 != 0){
            return num1 / num2;
        } else if (simbol == "%") {
            return (num1 * num2)/100;
        } else { returns "soryy this simbol is not understand"}      
  }
         console.log(calculator(25,"$",5)); 
//task 2+3
         function student(lastname ,age , name, level ){
 //task2- return typeof lastname + " " + typeof age + " " + typeof name + " "+typeof level;

     var sum = 0;
     var bar = "" ;
 if (typeof lastname == "number"){
      sum = sum+ lastname;
     } else  {
         bar = bar + lastname;
         }
 if (typeof age == "number"){
      sum = sum + age;
     } else  {
         bar = bar + age;
        }
   if (typeof name == "number"){
      sum = sum + name;
     } else  {
         bar = bar + name;
        }
  if (typeof age == "number"){
      sum = sum + level;
     } else  {
         bar = bar + level;
          }  
          return sum + " " + bar;
        
     }
       console.log(student( "Tovmasyan",35,"Arevik", 1 ));  
// task 4
        function primeNumber(number) {
        if ( number == 1 ) {
            return  "is not prime number";
        } else if( number == 2 ){
            return "is prime number";
        }
         else if ( number > 2 ) {
            for(var i = 2; i < number; i++) {      
              if (number % i ==0 ) {
               return "is not prime number" ;

                  }
               }   
    return "is prime number"
}        
        } 
      console.log(evenNumber(9)); */
//task 5
function argType(param) {
    var typeObjekt = {
        arg1: 1 ,
        arg2: "string" ,
        arg3: true ,
        arg4: undefined ,
        arg5: null ,
       
        
    }
     for (var key in typeObjekt){
       if ( typeof typeObjekt[key] == typeof(param)) {
            return  typeof typeObjekt[key];
       }

     }   
      
} 
       console.log(argType(undefined));        


//task 6   
function personDate( lastname, name, gender, age ) {
  var customer = {};
  customer.lastname = lastname;
  customer.name = name;
  customer.gender = gender;
  customer.age = age;
  
return customer;
}   

console.log(personDate("Grigoryan" ,"Ani", "women", 20)); 
//task 7
function square(number){
 return number**2;
}
console.log(square(5));  

    typeof 5 =="number"
