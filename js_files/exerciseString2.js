//task :stringi mej chham@nknox element
 var str = "abacddbec";
 function noRepeatElement(str) {
     a = str.split("");
     for (var i = 0; i < a.length; i++){
          var count = 0;
        for(var j = 0; j < a.length; j++){
           if( a[i] === a[j] ){
            count ++;
           } 
        }
         if(count === 1){
            return a[i];
            break;
         }
     }    
 }
    console.log(noRepeatElement(str));
