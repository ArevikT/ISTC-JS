//  1. task + 4.task 
        // 0-100 zuyg tver
        // for-ov
        var sumEvenNumbers = 0; /* haytararum enq varibale ev skzbum kveragrenq 0 arjeq,
        vor@ khashvi zuyg tveri gumar@, */       
for (var i = 2; i <= 100; i++) { 
if ( i % 2 == 0 ) { //stugum enq ete 2-i bajanvi tiv@ uremn zuyg tiv e                 

console.log ( i );
sumEvenNumbers = sumEvenNumbers + i; /*ete zuyg lini tivy gumari verjin 
                              stacvac arjeqin */
} 
}    
console.log( sumEvenNumbers);
console.log( "sumEvenNumbers:" + sumEvenNumbers);


// while-ov
var i = 2;
while ( i <= 100 ) {
if ( i % 2 == 0 ) {
console.log ( i );
}
i++;
}  
// 0-100 kent tver
for (var i = 2; i <= 100; i++) { 
if ( i % 2 != 0 ) { // stugum enq ete 2-i chbajanvi uremn kent tiv e
console.log ( i );
}

}   
//   kam ays tarberakov 

// sksum enq 2-ic loop@, qani vor 1-i depq@ imast chuni 1 qayl avel klini
for (var i = 2; i <= 100; i++) { 
if ( i % 2 == 0 ) {            
continue; /* stugum enq,ete zuyg tiv e uremn @ntacik cikl@
         @ndhatvi u ancni hajord iteraciayin*/
}
console.log ( i );
}

}   
// 2. task
// tarberak 1
var i = 3;     //haytararum enq varibale ev assingning 3
// sksum enq 3-ic vor 2 qayl avel chani loop@
while ( i <= 100 ) {
if ( i % 3 == 0 || i % 4 == 0 ) { /*stugu enq 1-100 vor tvern en 
                     bajanvum 3-i kam 4-i*/
console.log ( i );
}

i++; // amen stugumic heto 1-ov incremen enq anum i-n
}   
// tarberak 2
var i = 3;
do {
if ( i % 3 == 0 || i % 4 == 0 ) {
console.log ( i );
}
i++;
}    while ( i <= 100 ) ; 
//task 3
  //1-10 tveri bazmapatikneri gumar@

var sum = 0;
for ( var i = 1; i <= 10; i++) {

for(var x = 1; x <= 10; x++ ){
if ( x % i == 0 ) { 
sum = sum + x;
}

}

}
console.log( "sum:" + sum );                 
