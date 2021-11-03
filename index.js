//Accept two integers and display the larger

var num1, num2;
num1 = 500;
num2 = 100;
                                                 
if(parseInt(num1) > parseInt(num2)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2) > parseInt(num1)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }


  //Find the sign of product of three numbers

  var m = 8
  var n = -9
  var o =-9

    if(m > 0 && n > 0 && o > 0)
    {
        console.log("sign is positive")
    }
    else if(m < 0 && n < 0 && o < 0)
    {
        console.log("sign is -")
    }
    else if(m < 0 && n > 0 && o < 0)
    {
        console.log("sign is -")
    }
    else if(m > 0 && n > 0 && o < 0)
    {
        console.log("sign is positive")
    }
    else if(m > 0 && n < 0 && o < 0)
    {
        console.log("sign is positive")
    }
    else{
        console.log("sign is -")
    }




    //How to sort three numbers  

    var numbers1 =20
    var numbers2 = -10
    var numbers3 = 70

if(numbers1>numbers2 && numbers1>numbers3){
    if(numbers2>numbers3){
        console.log(numbers1 +","+numbers2 +","+numbers3)
    }
    else{
        console.log(numbers1 +","+numbers3 +","+numbers2)
    }
}
else if(numbers2>numbers1 && numbers2>numbers3){
    if(numbers1>numbers3){
        console.log(numbers2 +","+numbers1 +","+numbers3)
    }
    else{
        console.log(numbers2 +","+numbers3 +","+numbers1)
    }

}else if(numbers3>numbers1 && numbers3>numbers2){
    if(numbers1>numbers2){
        console.log(numbers3 +","+numbers1+","+ numbers2)
    }else{
        console.log(numbers3 +","+numbers2 +","+numbers1)
    }

}


//Find the largest of five numbers


var a = 23  
var b =  22
var c = 11
var d = 44
var e = 2
if(a>b && a>c && a>d && a>e ){
    console.log(a)
}
else if(b>a && b>c && b>d && b>e ){
    console.log(b)
}
else if(c>b && c>a && c>d && c>e ){
    console.log(c)
}
else if(d>a && d>b && d>c && d>e ){
    console.log(d)
}
else if(e>a && e>b && e>c && e>d ){
    console.log(e)
}


//Sum the multiples of 3 and 5 under 1000

var n1 = 0;
for(var i=0;i<100;i++){
    if (i % 3 === 0 && i % 5 ===0) {
        
        n1 +=i
    }
}
console.log(n1)


//odd evenly
 let aa =9
 let bb =20
 if ((aa%2 == 0) && (bb%2 == 0)) {
     console.log(aa +'and' +bb +"is even")
 }
 else if ((aa%2 == 1) && (bb%2 == 1)) {
    console.log(aa +'and' +bb +"is odd")
}
else if ((aa%2 == 0) || (bb%2 == 1)) {
    console.log(aa +'is even and' +bb +"is odd")
}
else if ((aa%2 == 1) || (bb%2 == 0)) {
    console.log(aa +'is odd and' +bb +"is even")
}