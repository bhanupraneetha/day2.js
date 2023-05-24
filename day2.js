// print 1 to 10 using while loop
var i = 1;
while (i <= 10) {
 console.log(i);
 i++;
}
//print 10 to 1 using while loop

var i = 10;
while (i >= 1) {
 console.log(i);
 i--;
}
// update array and print array
var arr=[1,2,3,4,5,6];
arr[0]=8;
var x=arr[0];
console.log(x);
for(var i=0;i<=arr.length;i++)
console.log(i);


//update and print array

var arra=[11,22,33,44,55,66];
arra[0]=8;
var x=arra[0];
console.log(x);
for(var i=arra.length-1;i>=0;i--)
console.log(i);
//finding even number in array and printing even no.s

var ar=[1,2,3,4,5,6,7,8,9,10];
for(var index=ar.length-1;index>=0;index--){
    if(ar[index]%2==0){
        console.log(ar[index]);
    }
}
// finding odd in array and printing odd no.s
var ar=[1,2,3,4,5,6,7,8,9,10];
for(var index=0;index<=ar.length-1;index++){
    if(ar[index]%2==1){
        console.log(ar[index]);
    }
}

//sum of numbers while loop
var i=1;
var sum=0;
while(i<=10){
   
    sum+=i;
    i++
}
console.log(sum);


// factorial

var j=1;
var factorial=1;
while(j<=10){
    factorial*=j;
    j++;
}
console.log(factorial);

//57 table using while

k=1;
l=57;
while(k<=100){
    console.log(l + '*' + k + '=' + (l*k));
    k++;
}

//printing star 

var rows = 40;
var row = 1;
while (row <= rows) {
    var pattern = "";
    var column = 1;
    while (column <= row) {
        pattern += "* ";
        column++;
    }
    console.log(pattern);
    row++;

}

//for loops i,j
for(var i=10;i>=0;i--){
 for(var j=1;j<=10;j++){
        console.log(i + ',' + j);      
    }
     }


     // for loops i,j
    for(var i=10,j=1;i>=0,j<=10;i--,j++){
        console.log(i + ',' + j);      
    }


    // for loops i,j

    for(var i=10;i>=0;i--){
       
        console.log(i);
        for(var j=1;j<=10;j++){
            console.log(j);
        }
    }


    //for loops i,j

    
for(var i=10;i>=0;i--){
    console.log(i);
    let output = "";
for (let j = 9; j >=0; j--) {
  output += j + " ";
}
console.log(output); 
}


//for loops i,j


    
for(var i=10;i>=0;i--){
    
    for (let j = 9; j >=0; j--){
    console.log(i);
        let output = ""; 
      output += j + " ";
    
    console.log(output); 
    }
    }