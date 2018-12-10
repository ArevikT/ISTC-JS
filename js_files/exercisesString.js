//task 1    
  function changeExpression(parm){
    var str = parm.split(" ");
  for(var key in str){
    str[key] = str[key][0].toUpperCase()+ str[key].substring(1);   
   
}
  var newExpression = str.join(" ");
     return newExpression;
}
changeExpression("How are you doing today?");

//task 2
 function longWord(param) {
  var str = param.split(" ");
    for (var key in str) {
         var maxWord = str[0];
        if ( str[key].length > maxWord.length ) {                  
          
             maxWord = str[key] ;
        }
       
    }
    console.log(maxWord);

 }
 longWord("How are you doing today?");  
//task 3- exemplar1
   function vowelsCaunt(param) {
        var str = param.split("");
        var vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        var count = 0;
          for (var i = 0; i < vow.length; i++){
              for(j = 0; j < str.length; j++){
                 if (str[j] == vow[i]){
                     count ++;
                  }
              }
          }             
               console.log(count);
      }   
                vowelsCaunt("How are you doing today?");  

//task 3- exemplar2
function vowelsCaunt(param) {
     var vow = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];
     var count = 0;
   
     for (var i = 0; i < param.length; i++) {

          if (vow.indexOf(param[i])!== -1) {
             
             count += 1 ;
      }
  }
       console.log(count);
}
          vowelsCaunt("How are you doing today?");