 //task 1    

 var employee = {
    lastname: "Grigoryan" ,
    name: "Ani" ,
    age: 25 ,
    position: "specialist" ,
    salary: 300000
    fullName: function () {
        return this.lastname + " " + this.name ;
       }
    }
  
     function searchKey(obj,key) {

        if (typeof (key) === "string" && typeof (obj) === "object" && key in obj) {
            return "Thise property exists!"                    
        } else { return "Thise property is not exists"}
                      
    }
      console.log(searchKey(employee,"position")); 
// task 2
  function cleaningKey(obj) {
    if (typeof (obj) === "object" ){ var properties = Object.keys(obj) ;
     for ( var key in obj) {
         if ( key == properties[2] ) { 
             delete obj[key] ;
         }        
     }
}
        return Object.keys(obj);
  }

 console.log(cleaningKey(employee)); 

// task 3
   function sizeObject(obj) {
    if (typeof (obj) === "object" ) {
        return  Object.keys(obj).length ;
     
       }
       
   }       
      console.log(sizeObject(employee));  

// task 4
   var employee = {    
    lastname: "Grigoryan" ,
    name: "Ani" ,
    age: 25 ,
    position: "specialist" ,
    salary: 300000 ,
    fullName: function () {
        return this.lastname + " " + this.name ;
       }
    }

   employee.salaryOF1year = function() {
       return 12 * this.salary ;
    
}  
employee.printFullData = function () {
        return "your data:" + " " + employee.fullName() + " " + this.age + " " + this.position + "\n" + "employee.salaryOF1year:" +  employee.salaryOF1year() ;
    
}
             

    console.log(employee.printFullData());