//  console.log("hello")

//   2

//  console.log(8+2)

//  3

//  true false
// console.log(2+4===6)

//   4

//   let a=prompt("enter your name ")
// document.write("hello", a)

// let a=prompt("enter the val of a")
// let b=prompt("enter the val of b")

// document.write(Number(a)+Number(b))

// let a=67

// if(a<50){
//        console.log("smaller thn 50")
// }

// else{
//     console.log("larger thn 50")

// }

// let age=15
// if(age<18){
//         console.log("u cannot go for voting ")
// }

// else{
//         console.log("u can go for voting ")
// }

// let a=10;
// let b=7;
// console.log(a+b)

// let a=20;
// let b=30;
// console.log(a*b)

// and operator

// dono m true chahiye
// console.log(true && false)=false

//     or operator

// console.log(true || false) =true

// console.log(1||0)
// console.log(0 && 2)

// console.log((1&&2) || (0&&3))

// not operator
// console.log(!false)

// comparision operator

// console.log(2==2)
// console.log(2=="2")
// console.log(2==="3")

// ternary operatorq

// var a=200;
// var b;

// (a>100)? b="true": b="false";
// {
// document.write(b);
// }

// let a=89
//   (a>10)? console.log("its true"):console.log("false")

//   if statement

//  var a=200;
//  var b=100;

// if(a > b)
//   (a ==b)
//       {
//                 document.write("a is greater");
//         }

//       if else satement
//     var a=40;
//     var b=50;
//     if(a > b)
//     {
//         document.write("equal");
//     }
//     else{
//         document.write("yaha hu baba")
//     }

//       if else statement
// let x=20;
// let y=10;

// if(10 > 20){
//         document.write("hello")
// }
//    else{
//         document.write("smaller")
//    }

//        if(3>=5){
//              document.write( "3 is smaller");
//          }

//          else{
//                 document.write( "5 is a greater");
//          }

//     switch

//      var age=24;

//      switch(true){
//         case (age>=15 && age <=20):
//                 document.write("you are eligible");
//                 break
//                  case (age>=20 && age <=30):
//                 document.write("you are not eligible");
//                 break
//                 default:
//                         document.write("enter the vaild age")

1;
//      }

//     var day=8;

//     switch(day){

//         case 1:document.write("sunday");
//         break
//         case 2:document.write("monday");
//         break
//         case 3:document.write("tuesday");
//         break
//         case 4:document.write("wednesday");
//         break
//         case 5:document.write("thusday");
//         break
//         case 6:document.write("friday");
//         break
//         case 7:document.write("saturday");
//         break
//                   case 8:
//            defualt : document.write("please enter the correct val" ) ;

//     }

// let a=10;

// switch(a){
//         case 5: console.log("a is 5")
//         case 10: console.log("a is 10")
//         // break
// default : console.log("some other val")
// }

//       let name="dice"
//       switch(name){
//         case "chandan dice": console.log("hello ");
//         case "dice": console.log("namaste") ;
//         break
//         case "dice is a apka apna ghar" :console.log("kya haal hai");

// default:console.log("please enter correct name ");

//       }

//      loops

// // 1for-loops
// dry principle do not repet yourself core principle

// 10 bar printe
// for(let i=1; i<10; i=i+1){
//         console.log("hello")
// }

// for(let x=2;x<=6; x=x+1){
//         console.log("x")
// }

//                 let a=10;
//                 for(let i=1; i<=a; i=i+1){
//                        console.log(i);

//      }

//    if else perecentage

//      var per=49390;

//      if( per>=80 && per <=100){
//         document.write("you are in merit");
//      }

//        else if( per>=60 && per < 80){
//         document.write("you are in first division  ");
//      } else     if( per>=45 && per< 60){
//         document.write("you are in 2end division");
//      } else     if( per>=33  &&  per < 45){
//         document.write("you are in 3division");
//      } else     if( per < 33){
//         document.write("fail");
//      }
//      else{
//         document.write("please enter vaild percentage")
//      }

//      increment ''''decrement/

// let a=10;
// let b=(a--)+(++a);
// let c=(a++)+(--b)+(a--)-(b++);
// let d=(c++)-(++a)+(b++)+(a++)+(b--);
// {
//         console.log(a,b,c,d)

//  nested loops

//  isme same value ko chala  sakte hai 1   // 22 333 4444 aise bas A ki val use karke

//  for(let  a=1; a <=5; a++){
//     for(var b=1; b<=a;b++){
//         process.stdout.write(String(a)+ " ")
//     }
//     console.log()
//  }

//  111
//  222
//  333
//  for(i=1; i<=3; i++){
//         for(j=1; j<=3; j++){
//                 process.stdout.write(String(i) + " ");

//         }
//         console.log()
//  }

// isme
// 4444
//  333
//   22
//    1 kuch aise numbering krwa sakte hai

//  for(i=5;i>=1; i--){
//         for(j=1;j<=i;j++){
//            process.stdout.write(String(i))
//         }
//         console.log()
//  }

//            isme numbering
//          5 4 3 2 1
//          4 3 2 1
//          3 2 1
//          2 1
// 1  aise karte hai

//  for(i=5;i>=1; i--){
//     for(j=i; j>=1; j--){
//         process.stdout.write(String(j)+ " ")
//     }
//     console.log()
//  }

// isme 123456789 10 kitni  bhi ginti likha skate ho

// for(let a=1; a<=200; a=a+10){
//      for(let b = a; b<= a+10;b++){
//               process.stdout.write(String(b)+ " ")

//      }
//       console.log()
// }

//  isme
//   1
//  23
//  456
//  789 aise loop kaam karegi

// let count=1;
// for(let i=1;i<=5;i++){
//         for(let j=1;j<=i;j++){
//                 process.stdout.write(String(count)+" ");
//                 count++;
//         }
//         console.log()
// }

// isme 1
//      12
//      123
//      1234
//      12345
//      aise print hoga

// for(let i=1;i<=5;i++){
//         for(let j=1;j<=i;j++){
//                 process.stdout.write(String(j)+" ");

//         }
//         console.log()
// }

// *
// **
// ***
// ****kuch aisa output aayega

// for(let i=1;i<=5;i++){
//         for(let j=1; j<=i;j++){
//                 process.stdout.write("*");

//         }
//         console.log()
// }

//   123
//   456
//   789 aise loop chalegi

//          let count=1;
//     for(let i=1; i<=3;i++){
//         for(let j=1; j<=3; j++){
//            process.stdout.write(String(count));
//                 count++;

//         }
//         console.log()
//     }

//     1
//     11
//     111
//     1111 aisa kuch aayega

//   let count=1;
//     for(let i=1; i<=4; i++){
//         for(let j=1; j<=i; j++){
//                 process.stdout.write(String(count))

//         }
//         console.log()
//     }

//  fibonacci series

// 1
// 2 3
// 5 8 13
// 21 34 55 89

// let a=0;
// let b=1;
// for(let i=1; i<=4; i++){
//         for(let j=1; j<=i; j++){
//                 let c=a+b;
//                 process.stdout.write(String(c)+ " ");
//                 a=b;
//                 b=c;

//         }
//         console.log()

// }
// 1 2 3 5
// 8 13 21
// 34 55
// 89
//         let a = 0, b = 1;
// for (let i = 4; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         let c = a + b;
//         process.stdout.write(String(c) + " "); // Terminal ke liye
//         a = b;
//         b = c;
//     }
//     console.log(); // New line
// }

//   10
//   9 8
//   7 6 5
//   4 3 2 1 kuch aisa hoga

//      let count=10;
//      for(let i=1; i<=4; i++){
//         for(let j=1; j<=i; j++){
//                 process.stdout.write(String(count)+" ");
//              count--;
//         }
//         console.log();
// }

//    isme + - ya or bhi kuch kar sakte hai count ki value ko likh ke uske aage + ya - karke jaise
//         count= count+2;   == 4;
//        let count=2;
//        for(let i=1; i<=4; i++){
//         for(let j=1; j<=i; j++){
//                 process.stdout.write(String(count)+ "  ")
//                 count = count*2;
//         }
//         console.log()
//        }

//  10 9 8 7
//  6 5 4
//  2 3
//  1

//        let a=10;
//              for(let i=4; i>=1; i--){
//              for(let j=1; j<=i; j++){
//                 process.stdout.write(String(a)+ " ");
//                 a--;
//              }
//              console.log()
//              }

//     sum

//   let sum=0;
//   for(let i=1; i<=50; i++){
//         sum=sum+i;

//   }
//   console.log(sum)

//Q1    //    Prime Number Checker (Incorrect Logic)" keh sakte hain,
//       let a=10;
//        for(let i=1; i<10; i++){
//         if(a%i==0){

//                 console.log("num is compostie")
//         }

//         else{
//                 console.log("num is prime",i)
//         }

//       }

//  * * * * *
//  *       *
//  *       *
//  *       *
//  * * * * *    aisa kuch print hoga

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5;j++){
//         if(j==1 || i==5 || j==5 || i==1){
//             process.stdout.write(" * ");
//         }
//         else{
//             process.stdout.write("   ");
//      }
//     }
//     console.log();
// //}
//                        for(let i=1; i<=5; i++){
//                         for(let j=1; j<=5; j++){
//                                 if(j==1 ||i==5 || j==5|| i==1){
//                                         process.stdout.write(" * ")
//                                 }
//                               else{
//                                      process.stdout.write("   ")
//                               }
//                         }
//                          console.log();
//                 }

//   *
//   *
//   *
//   *
//   *
//   * * * * * * * aisa kuch

// for(let i=1; i<=4; i++){
//     for(let j=1; j<=4;j++){
//         if(j==1 || i==4 ){
//             process.stdout.write(" * ");
//         }
//         else{
//             process.stdout.write("  ");
//      }
//     }
//     console.log();
// }

//  *  *  *  *
//  *  *  *  *
//  *  *  *  *
//  *  *  *  *

// let x=("*")
// for(let i=1; i<=4; i++){
//     for(let j=1; j<=4; j++){
//         process.stdout.write(" * ")
//     }
//     console.log()
// }

// * * * * *
// *
// * * * * *
// *
// * * * * * aisa kuch print hoga

// for(let i=1; i<=5; i++) {  // Outer loop - rows control karta hai
//     for(let j=1; j<=5; j++) {  // Inner loop - columns control karta hai
//         if(i==1 || j==1 ||i==3 ||i==5) {  // Pehli row ya pehla column par * print hoga
//             process.stdout.write(" * ");
//         } else {
//             process.stdout.write("   ");  // Baaki spaces print honge
//         }
//     }
//     console.log();  // Har row ke baad new line
// }

//  *           *
//  *  *     *  *
//  *     *     *
//  *           *
//  *           *

// for(i=1; i<=5; i++){
//         for(j=1; j<=5; j++){
//                 if(j==1 || j==5 || (i==2 && j==2 )|| (i==3 && j==3)|| (j==4 && i==2)){
//                         process.stdout.write(' * ')
//                 }
//                 else{
//                         process.stdout.write("   ")
//                 }

//         }
//         console.log()
// }

//      *  *  *  *
//          *
//          *
//          *
//          *

// for(let i=1; i<=5; i++){
//         for(let j=1; j<=5; j++){
//                 if(j==3||i==1){
//                         process.stdout.write(" * ")

//                 }
//                 else{
//                         process.stdout.write("   ")
//                 }

//         }
//  console.log()
// }

//  *        *
//  *  *     *
//  *     *  *
//  *        *

//  for(i=1; i<=4; i++){
//         for(j=1; j<=4; j++){
//                 if(j==1 || j==4 ||(j==2 && i==2)|| (j==3 && i==3)){
//                         process.stdout.write(" * ")
//                 }else{
//                         process.stdout.write("   ")
//                 }
//         }
//         console.log()
//  }

//    *       *
//      *   *
//        *
//    for(let i=1; i<=3; i++ ){
//         for(let j=1; j<=5; j++){
//                 if((j==1 && i==1)||(j==2 && i==2)||(j==3 && i==3)||(j==4 && i==2)||(j==5  && i==1)){
//                            process.stdout.write(" * ")
//                 } else{
//                         process.stdout.write("   ")
//                 }
//                 }
//                       console.log()
//                 }

//        *
//      * * *
//    * * * * *
//  * * * * * * *

//       while
//               let a=18;
// while( a>=3){
//         console.log(a);
//        a=a-3;
// }

// Is code ko "Extracting Digits of a Number (Right to Left)" ya "Reverse Digit Extraction" question kaha jata hai.

//   Q1    💡 "Given a number, print its digits one by one from right to left."
//  let num=3547;
// while(num>0){
//         let rem=num %10;
//         console.log(rem);
//         num=Math.floor(num/10) ;
// }

//Q2
//  let num=741704;
//  while(num>0){
//  rem=num%10;
// console.log(rem);
//  num=Math.floor(num/10);
// }

//    Ye code diye gaye number ke total digits count karta hai.jaise 8 digits hai

//Q3
// let num = 35477658;      // Ek number define kiya gaya
// let count = 0;           // Ek counter banaya, jisme hum digits ko ginenge

// while (num > 0) {       // Jab tak num zero se bada hai, loop chalega
//     count++;            // Har iteration mein count ko 1 se badha dena
//     num = Math.floor(num / 10); // Number ka last digit hata dena
// }
// console.log(count);     // Total digits ko print karna

//Q4
// let num=1423789;
// let count=0;
// while(num>0){
//         count++;
//         num=Math.floor(num/10)
// }
// console.log(count)

// output
// 2
// 4
// 6
// 5
// 7

//Q5
// let num = 75642;           // Ek number define kiya gaya
// while (num > 0) {         // Jab tak num zero se bada hai, loop chalega
//     let rem = num % 10;   // Number ka last digit nikalna (modulus operator se)
//     console.log(rem);     // Last digit ko print karna
//     num = Math.floor(num / 10); // Last digit ko hata dena (integer division se)
// }

//              Question Statement:
// 💡 "Write a function that takes a number as input and prints its digits from right to left."
//            with function

//                                   🧮 Kyun num likha hai?
// num ek parameter hai – Jab hum function call karte hain (e.g., breaking(123456)), 123456 value num mein store ho jati hai.
// Function mein input dene ke liye – Har baar jab hum function call karte hain, naya number num ke through function ko diya jata hai.

//Q1
// function breaking(num){
//         while(num>0){
//    console.log(num%10);
//    num=Math.floor(num/10)
//         }
// }
// breaking(23456)
// breaking(987654321)/

//Q2
//       function breaking(num){
//         while(num>0){
//                    console.log(num%10)
//                 num=Math.floor(num/10)
//         }
//       }
//       breaking(123987)

//             //   Question???????????/??????
// let num=3456;
// let temp=num;
// let count=0;
// while(num>0){
//         count++;
//         num=Math.floor(num/10)
// }
// let power=Math.pow(10,count-1)
// while(temp>0){
//         let rem=Math.floor(temp/power)
//         console.log(rem)
//         temp=temp%power;
//         power=power/10
//  }

// //Q3
// let num = 3456;         // Ek number define kiya
// let temp = num;         // temp mein num ki copy banayi
// let count = 0;          // count digits ginenge

// // Step 1: Number mein kitne digits hain, yeh count karna
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);  // Last digit hata dena
// }

// // Step 2: 10 ka power calculate karna (digits ke hisaab se)
// let power = Math.pow(10, count - 1);

// // Step 3: Har digit ko original order mein print karna
// while (temp > 0) {
//     let rem = Math.floor(temp / power); // Sabse leftmost digit nikalna
//     console.log(rem);                   // Digit ko print karna
//     temp = temp % power;                // Us digit ko hata dena
//     power = power / 10;                 // Power ko ek step reduce karna
// }

//        functions
//  es5 funtion
// es6 funtion
// funtion statement
//  funtion experssion
//    higher order funtion
//    call back funtion
//    immditali invoke funtion experssion

//        simple function
//Q1
// Step 1: Function definition
// function a() {
//     let name = "dice";            // Ek local variable 'name' banaya jisme "dice" value hai
//     console.log("hey", name);     // "hey dice" print karega
//     console.log("hello");         // "hello" print karega
// }

// // Step 2: Function call
// a();

// static function
//0
//   1
//   2
//   3
//   4
//         function counting(){
//         let count=0;
//         console.log(count)
//         count++;
//         console.log(count)

//         count++;
//         console.log(count)
//         count++;
//         console.log(count)

// }
// counting()
// }

//extra Q
//  function sum(){
//      var total=0;
//      for(let i=0; i<arguments.length;i++){
//         total +=arguments[i]
//      }
//        return total;
//  }
//  console.log(sum(1,2,3,4,5));

//     dyanmic function=  => parameters , arguments
//    isme hum fn ko ek varible ki tara use kar ke kuch bhi nam  print kra sakte hai

// function fn(b){
//         console.log("hey",b);// perameter
//          return ("enter the value")   //undifined ki jaga ye text show hoga
// }
//       console.log(fn("kunal"))  //argument
//  console.log(fn("chandan dice "))//arument

//  function kuku(A){
//         console.log("hey",A)
//            return ("hello")
//  }
//  console.log(kuku("vipin chamar "))
//   console.log(kuku("rohan chamar "))

// EX  Q  . ..   "Even Number Sum Calculation using arguments Object" bol sakte hain
//  function kuku(){
// let count=0;
// for(let i=0; i<arguments.length; i++){
//  if(arguments[i]%2==0){
//  count +=arguments[i]
//  }
// }
// return count
//  }
//  console.log(kuku(1,2,3,4,5))

// Q 1 create a function which accepts as arument and and print it with a hello

//  function fn(a){
//      console.log("hello",a)
//  }

//  fn("world")
//  fn("dice")

//  sum is tarike se kara jata hai

// function sum(a,b){
//         console.log(a+b)

// }
// sum(10,20)
// sum(12,5)

//    function sum(a,b){
//         console.log( "hello",a+b,"sum")
//    }
//     sum(4,4)
//     sum(4,4)

// es5 function

// function keyword

//        function hello(name){ //parameter
//         console.log("hello",name)
//        }
//        hello('dice')  //argument1

//  es6  fat arrow funtion

//       let a=()=>{  // anoymous
//          console.log("i am es6 funtion ")
//       }
//       a()
//       a()

//   experssion funtion

//  isme hum ek varible  bante hai or usko hi use karte hai //varible ko hi call karte hai
//  let ab=function a(){
//         console.log("hello")
//  }
//  ab()

// 3 keyword in JS

// return,  break, continue
//
//
//
//           retrun

// Question
//   Yeh post-increment operator (++) hai.

// function greeting(){
//         console.log("hello")
//         return 2
//   // console.log(hello) ====console.log(bas retrun ke ander hi kaam karta hai suke bhar vo km nhi karta )
// }
// // greeting()       //agar hume 2 bhi print karna hai to uska bhi ek variable bangoa
// let a=greeting()
// console.log(a)
// a++            //iska abhi kuch pata nhi

//break

//      Function findtarget(upperlimit, lowerlimit, target) //teen arguments leta hai

//        upperlimit → sabse bada number jo check karna hai
//         lowerlimit → sabse chhota number jo check karna hai
//             target → woh number jo dhoondhna h

//     start==>
//Q1 Tumhare diye gaye function ka naam "Linear Search Algorithm" hai. 🔍💡

//        function findtarget(upperlimit, lowerlimit,target){
//         for(let i=lowerlimit; i<upperlimit;i++){
//                 if(i==target){
//                          console.log("num is found")
//                          break
//                 }
//                      else{
//                 console.log("num is not found")
//         }
//         }
//        }
//         findtarget(10,1,5)

// function findtarget(upperlimit,lowerlimit,target){
//         for(i=lowerlimit; i<upperlimit; i++){
//                 if(i==target){
//                         console.log("num is found");
//                           break
//                 }else{
//                         console.log("num is not found");

//         }
//         }
//          }
// findtarget(10,1,6)

//Q2 "Linear Search Algorithm" hai. 🔍💡

//    function kuku(upperlimit,lowerlimit, target){
//         for(let i=lowerlimit; i<=upperlimit; i++){
//                  if(i==target){
//                      console.log("varsha is found")
//                  }else{
//                         console.log("varsha is not found")
//                  }

//         }

//    }
//    kuku(10,1,4)

//  countinue -iteration miss
//   EX Q Is question ko hum "Loop with continue statement" bolte hain. Yeh ek for loop hai jo 1 se lekar 10 tak numbers ko print karta hai, lekin 5 ko skip karta hai.

//       for(let i=1;i<=10; i++){
//         if(i==7){
//                 continue
//         }else{
//                 console.log(i)
//         }
//       }

//     ARRAY

// 👉 Array ki khasiyat:

// Ordered Collection: Values ek fixed order mein store hoti hain.
// Zero-based Indexing: Pehla element ka index 0 hota hai.
// Dynamic: Array ki length badhayi ya ghataayi ja sakti hai.
// Different Data Types: Ek hi array mein alag-alag types (numbers, strings, objects) store kar sakte hain.

// let arr=[12,13,14, "hello",true,[1,2,3],function kuku(){}]
// console.log(arr.length)
// console.log(arr[5])

//ARRAY LOOP
// Q1

// let arr=[1,2,3,4, "kunal hey", function ab(){},"hello"]
//  for(let i=0; i<arr.length; i++){
//         // console.log(arr[i]);

//  }
//   console.log(arr[5]);

// Q2
//          let arr=[1,2,3,4,23,true,"hello dunia",function (){}, [1234]]
//    console.log(arr[4])
//         for(let i=1; i<=arr.length-1; i++){ // jub hum  arr length-1 karte hai to last ki value hat gya delete ho jati hai
//                 console.log(arr[i])
//         }

//Q3 array sum in loop

// let arr=[1,2,3,4]
// let sum=0;
// for(i=0; i<arr.length; i++){
// sum= sum+ arr[i]
// }
// console.log(sum)

//Q5

// let arr=[1,2,3,4,5]
// sum=0;
// for(let i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//         sum=sum+arr[i]
// }
// }
// console.log(sum)

// Q6

// let arr=[1,2,3,4,5,6,7,8]
// sum=0;
// for(i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//          sum=sum+arr[i]
// }
// }
// console.log(sum);

//ex

//  let arr = [1, 2];
// arr.push(3);
// console.log(arr); // [1, 2, 3]

//Q1 // find total num of prime number in array

// let arr=[1,2,3,4,5,6,7,8,9,]
// let primecount=0;
// for(let i=0; i<arr.length; i++){
//         let isprime=true;

//         for(let j=2; j<arr[i]; j++){
//                 if(arr[i]%j==0){
//                 isprime=false
//         }
//         }
//         if(isprime==true && (arr[i] !=1)){
//      primecount++
//         }
// }
// console.log(primecount)

// let arr=[1,2,3,4,5,6,7,8,9,]
// let primecount=0;
// for(let i=0; i<arr.length; i++){
//      let isprime=true;

//      for(j=2; j<arr[i]; j++){
//         if(arr[i]%j==0){
//                 isprime=false;
//     }
//      }
//      if(isprime==true && (arr[i]!=1)){
//         primecount++
//      }
// }
// console.log(primecount)

//Q2
// function findprimecount(arr){
//         let primecount=0;
// for(let i=0; i<arr.length; i++){
//         let isprime=true;

//         for(let j=2; j<arr[i]; j++){
//                 if(arr[i]%j==0){
//                 isprime=false;
//                 }
//         }
//         if(isprime==true && (arr[i] !=1)){
//                 primecount++
//         }
// }
// console.log(primecount)
// }
// findprimecount(12,33,44,7,11,31)

//    push pop unshift shift

// Method   ||  Add/Remove Kahan Kaam Karta Hai?	Return Kya Karta Hai?
// push()   ||	Add||Array ke end mein                     Naya length
// pop()    ||  Remove||Array ke end se                  Remove kiya hua element
// unshift()||	Add||Array ke start mein	         Naya length
// shift()  ||  Remove ||Array ke start se	        Remove kiya hua element

//Q1 Push // push() ||Add||Array ke end mein    Naya length
// let arr=[1,2,3,4,5,6,7,8,9]
//     let b=arr.push(10)
//     console.log(arr,b)

//Q2  // pop()    ||  Remove||Array ke end se     Remove kiya hua element
//         let arr=[1,2,3,4,5,6,7,8,9]
//      let a=  arr.pop()         //let a=arr.pop ki krke hum total number ki count niklte hai
//                 console.log(arr,a)

//Q3  // unshift()||	Add||Array ke start mei   Naya length
//  let arr=[3,4,5,6]
//   arr.unshift(1,2)  unshift ki madat se aage ki value leli agar isme hum length bhi daal dete hai to vo total number ko count karke 5 batega
//   console.log(arr)

//Q4 // shift()  ||  Remove ||Array ke start se	     Remove kiya hua element
//   let arr=[1,2,3,4,5]
//   arr.shift()
//   console.log(arr)

// Q3 in an arrY FIND THE COUNT OF NUMBER which are greater than 50

//        let arr=[40,45,50,60,70,80,100]
//        let count=0
//        for(let i=0; i<arr.length; i++){
//         if(50<arr[i]){
//                 count++
//         }
//        }
//        console.log(count);

//Q1 create A function which takes 2 argument and an array and push them in thaT Array
//        function pushingelement(arr,a,b){
//         arr.push(a)
//         arr.push(b)
//         return arr
//        }
//        let a=pushingelement([1,2,3,4,54],90,68)
//        console.log(a)

//      Q2 create a fn which takes an array and returns total num of odd number in an array
//      function odd(arr){
//       let count=0;
//         for(let i=0; i<arr.length;i++){
//                 if(arr[i]%2!==0){
//                         count++;
//                 }
//         }
//         return count;
//      }
//      let ab=odd([1,2,3,4,5])
//      console.log(ab)

//array slice
// slice() method ka use array ke ek part (subset) ko nikalne ke liye kiya jata hai. Ye original array ko modify nahi karta, balki ek naya array return karta hai.

//         let arr1=[1,2,3,4,5,6,7]

//      //   slice method .. original array doesnot modify

//      let modifyfiedarray=arr1.slice(2,4)

//      console.log(arr1,"--------------",modifyfiedarray)

//      //   Q2
//          let arr=[1,2,3,4,5,6,7]
//            let ab=arr.slice(2,4)
//            console.log(arr,'-------',ab)

//     splice ==>original array does modify

//     let arr1=[1,2,3,4,5,6]  //apne aage wale se chlna start kra or jha khtm hua ho vo print
//       let c=arr1.splice(2,2) //does not returnsx anything

//          console.log(c) //takes 2 argument -: first arg- initial indexx and second one is count of elements

//  sort
//  Number ko theek se sort karne ke liye compare function dena zaroori hai.
// let arr1=[1,7,300,9,200]
// //1,2,3,7,9 //ascendind order m arrange karna
// arr1.sort()
// console.log(arr1)  //[ 1, 200, 3000, 7, 9 ]

//Q1 ascending orde
// let arr1=[1,3,5,7,8,9] // ascending order  chote se bada
// arr1.sort()
// console.log(arr1)

//  Q2 descending order
// let arr1=[1,7,300,9,200] // descending order   bade se chota
// arr1.sort((a,b)=>b-a) // in built method
// console.log(arr1)  //[ 300, 200, 9, 7, 1 ]

//Q3
// let arr1=[1,2,3,45,5]
// arr1.sort((a,b)=>b-a)
// console.log(arr1);

//Q1 Is question ko "Bubble Sort Algorithm" ka implementation bolte hain, lekin yeh code bubble sort ka ek modified version hai.

// let array=[1,3,4,5,2,6]
// for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//         if(array[i]> array[j]){
//         let temp=array[i]
//         array[i]=array[j]
//         array[j]=temp
// }
// }
// }
// console.log(array,[array.length-1])

//Q1 find the largest number in an array ,after sorting

// let arr=[1,2,3,4,5,6,65]
//  for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//                 if(arr[i]>arr[j]){
//                 let temp=arr[i]
//                  arr[i]=arr[j]
//                  arr[j]=temp
//                 }
//         }
//  }
//  console.log(arr[arr.length-1]) //arr.length - 1 ka matlab hai ki loop aakhri element se pehle tak chalega.

// Q2 find the secoend largest number , sorting

//  let arr=[1,2,3,4,5,30,65]
//  for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//                 if(arr[i]>arr[j]){
//                 let temp=arr[i]
//                  arr[i]=arr[j]
//                  arr[j]=temp
//                 }
//         }
//  }
//  console.log(arr[arr.length-2])

//  Q4 duplicate (doosre baar aane wale) elements ko hata kar sirf unique elements ka naya array banata hai.

// function removeduplicates(arr){
//         let uniquearr=[] //👉 Ismein hum sirf unique (ek baar aane wale) values ko store karenge.
//         for(let i=0; i<arr.length; i++){
//                 if(!(uniquearr.includes(arr[i]))){
//                         uniquearr.push(arr[i])
//                 }
//         }
//     return uniquearr
// }
// let ans=removeduplicates([1,5,7,8,6,4,8,7,2,5,6])
// console.log(ans)

//   function re(arr){
//        let un=[]
//         for(let i=0; i<arr.length; i++){
//                 if(!(un.includes(arr[i]))){
//                         un.push(arr[i])
//                 } return un
//         }
//   }
//   let a=re([1,2,4,5,62,3,42,12,2,])
//   console.log(a)

// Q1 check if a giving target exists is an array
// function hello(arr){

//         let count=0;
//         let target=5;
// for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//                 count++
//         }
// }
//     return count
// }
// let ab=hello([1,2,3,4,5,5,5,6])
// console.log(ab);

// Q2 find if the array has dublicates then remove the duplicates

//Q1 check the target

// function checktarget(arr,target){
//         let exists=false;
//         for(let i=0; i<arr.length; i++){
//                 if(arr[i]==target){
//                         exists=true
//                 }
//         }
//         return  exists
// }
// let ifexists=checktarget([1,2,3,4,5,6,7,2,],2)
// console.log(ifexists)

//Q1"in-place array reversal" algorithm hai. Iska kaam array ko ulta karna (reverse karna) hai bina kisi naye array ka use kiye.
//   let arr=[1,2,3,4,5]
//   let left=0;
//   let right=(arr.length)-1;
//   while(right >  left){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
//         left++
//         right--
//   }
//   console.log(arr);

//   foreach loop
// // foreach loop hr element ko access karne m help karta hai
// ✅ "Using forEach to Modify and Print Array Elements"
// let arr=[1,2,3,4,5]
// arr.forEach((element)=>console.log(element+2))

//MAP

//   let arr=[1,2,3,4]
// //   [2,4,6,8]
// let newarr=[]
// for(let i=0; i<arr.length; i++){
//         let a=arr[i]*2;
//         newarr.push(a)
// }
// console.log(newarr);

// map by default ek naya Array banta hai , uske element ko modify karte hai  or jo naya
// array bana tha usko retrun krte hai

//          let arr=[1,2,3,4]
//          let ans=arr.map((kunal)=>{
//           return kunal*2
//          })
// console.log(ans)

//   filter modify nhi karte ,,,,creates and filters on the basis of condition ,
//   jo naya arr hoga usko return bhi krega

// let arr=[1,2,3,4,5]
// let ab=arr.filter((kuku)=>{
//         return kuku%2!==0
// })
// console.log(ab); // output [ 1, 3, 5 ]

//   reduce

//ek pura arr ek sigle line m convert ho jayega

//   let arr=[1,2,3,4,5]
//   let ab=arr.reduce((acc, cv)=>{
//         return acc+cv
//   })// usme plus ke liye jo output aayega agar idhar 5 hoga to ans 15 hota
//   console.log(ab);  //output 10

//  let arr=[1,2,3,2,1]
//  let left=0;
//  let right=(arr.length-1)
//  while(right > left){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
//         left++
//         right--
//  }
//  console.log(arr);

//Q1
// let a=10;
// let b=a;
// a++
// //  b ne ek bar value li or uske bad independent ho Wgye
//   console.log(a,b);

// let arr=[1,2,3,4]
// let arr2=arr;
// console.log(arr2);
// arr2[0]=0;
// console.log(arr2, arr);

// function ispallindrome(arr){
//         let arr2=[...arr];
//         let left=0;
//         let right=arr2.length-1;
//         console.log(arr,arr2)
//         while(right > left ){
//                 let temp=arr[left]
//                 arr[left]=arr[right]
//                 arr[right]=temp
//                 right--
//                 left++
//         }
//          console.log(arr,arr2);
//          let ispallindrome=true
//      for(let i=0; i<arr.length; i++){
//         if(arr2[i]!=arr[i]){
//                 ispallindrome=false;
//         }
//      } return  ispallindrome
// }
// let ans=ispallindrome([1,2,3,4])
// console.log(ans);

//    function ispallindrome(arr){
//         let arr2=[...arr]
//         let left=0;
//         let right=(arr2.length-1)
//         console.log(arr2,arr);

//           while( right > left){
//                 let temp=arr[left]
//                  arr[left]=arr[right]
//                  arr[right]=temp
//                  right--
//                  left++
//           }
//           console.log(arr, arr2);
//               let ispallindrome=true
//      for(let i=0; i<arr.length; i++){
//         if(arr2[i]!=arr[i]){
//                 ispallindrome=false;
//         }
//    } return ispallindrome

//    }
// let ans=ispallindrome([1,2,3,2,1])
// console.log(ans);

//     function remove(arr){
//         let unique=[]
//         let ab=false ;
//         for(let i=0; i<arr.length; i++){
//                 if(!(unique.includes(arr[i]))){
//                    unique.push(arr[i])
//                    ab=true
//                 }
//         } return unique
//     }
//   let a=remove([1,2,3,3,33,3,])
//   console.log(a);

// Ek mobile object bana jisme brand, price aur ek method ho jo "calling..." print kare

//                           JS  in OBJECT
//      Q1
//    key value paris

// let obj={
//         named:"dice"
// }
// console.log(obj.named);  //=> .  Dot notation ka matlab hai: obj ke andar jo property "named" hai, uska value access karo.

//  indexing notation

//       let obj={
//         named: "dice"
//       }
//       console.log(obj["named"]);   //dice
// console.log( obj.length);       //undefined  show

//  methods  object ke ander function chle ko methods bolte hai
//    methods  es5 and es6
//       es5 me this ko use karke prent,,vle milti hai
//       es6 me global object  {}

//       let obj= {
//         named: "kunal",
//         age: 20,
//         fn: function (){
//                 console.log(this)
//         }
//         ,
//           fn2:  ()=>{
//                 console.log("object2");
//                 //6
//           }
//         }
//         console.log(obj.named);
//         obj.fn2()
//        console.log(obj);

//   crud => means create read update and delate

//  array crud==> push  , pop , shift, unshift,  console.log(arr[0])

//  | read
//    object ko read karna matlab uske andar ke values ko access karna — ye 2 main ways se hota hai:
//      1  Dot Notation
//    2. Bracket Notation (Jab key string ya variable ho)
//    Jab key variable mein ho, ya key mein space ho, tab bracket notation use karo.

//  2 update
//   let user = {
//   name: "Kunal",
//   age: 24
// };
// // 🔹 Existing property update
// user.age = 25;   ////  user.city="mubai"   //nayi key  value add karna

// console.log(user);

//                         3 delete Object
// let person={
//         named:"kunal",
//         age:25
// }
// delete person.age
// console.log(person);

//   global is anything written outside of a function , array , object

//      console.log(this);  // global object
//       current context
//                         // global object

//
 

    

// this objects

//method  //
//es5
// let obj={
//         named:"dice",
//         fn:function (){
//                 console.log(this);  //output >prent value
//         }
// }
//    obj.fn()

//   es6 method
//    let obj={
//         named:"kunal",
//         fn:()=>{
//                 console.log(this);
//         }
//    }
//    obj.fn()   // output=> {}  global object

//!Q
// function ke ander function  ko cll kra to vo unlimitate chlTA HAI

// let obj={
//         name:"kunal",
//         age:10,
//         fn:function(){
//                 this.fn()
//         }
// }
// obj.fn()

//                                      this.fn is not a function
//  let obj={
//         name:"kunal",
//         age:10,
//         fn:()=>{
//      console.log(this);
//         // this.fn()     //recurssion
//         }
// }
// obj.fn()

// Q!
// let obj={
//         name:"kunal",
//         age:21,
//         fn: ()=>{
//                 console.log(this);
//                 this.fn
//         }
// }
// fn()

//Q!
//   function ab(){
//   console.log(this);   //  output global object
//   }
//   ab()

//Q!
// this context
//  1 global ->object obj {}
// 2 fn method->object
//3 es6 method ->global obj
//4 es5 method->parent obj
// console.log(this); //{}

//Q! forin loop

//     let obj2={
//         name:"kunal",
//         age:300
//     }
//     for (const ab in obj2) {
//         console.log(ab,obj2.name);// dot nonation
//        }

// array me forin loop
// let arr=[1,2,3,4,5,6]
// for (const key in arr) {
//    console.log(key,arr[key]); // 0 se indexing
// }

//  let arr=[1,2,3,4,5,6]
// for (const key in arr) {
//       console.log(arr[key]);            //1 se indexing
// }

//forof loop
// let arr=[1,2,3,4,5,6]
// for (const element in arr) {
//         console.log(element);
// }

// object  Destructuring
//          let obj={
//                 name:"kunal",
//                 age:12
//          }
//          let {name:naam, age:umar}=obj  //name=ko naam==se change kardiya ==or  age  ko umar  se
//          console.log(naam,umar);
//     //     cutomised obj destru
//         console.log(obj.name);

//Q! destruchturing
//        let obj={
//         name:"kunal",
//         age:21
//        }
//       let {name,age}=obj
//       console.log(name,age);  //1
//       console.log(name);      //2
//       console.log(obj);

//     //Q!
//   let obj={
//         name:"kunal",
//         age:21
//   }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//  call aply ,bnid
//   inka use hum tab karte hai jab humare pass bhut saare object hoto us time inko call ya bind apply ka use karte hai alag alag object ko access karne ke liye

// apply
//       function greet(hello){
//        // console.log(this);
//         console.log(`${hello} :${this.name}`);
//       }
//       let obj={
//         name:"abcd"
//       }
//       greet.apply(obj,["hello"])

//call
//                let friend={
//         name:"ram",
//         age:12,
//          fn:function(){
//                 console.log(`${this.name} his my freind`);
//       }
//       }
//        let friend2={
//         name:"ramesh",
//         age:14,
//         fn:function(){
//                 console.log(`${this.name} his my freind`);

//         }
//       }
//       friend2.fn.call(friend2)

//easy method  call
//     function greet(){
//      console.log( ` hello ${this.name}`);
//      }
//      let obj={
//      name:"kunal"
//      }
//      greet.apply(obj)

//Q!
//   function greet(num1){
//         console.log(this.name+`${num1}`);
//   }
//   let obj={
//         name:"dice"
//   }
//   let boundfn=greet.bind(obj)
//                                      //re usble
//   console.log(boundfn);
//   boundfn()
//   boundfn()
//   greet()  //undefinedundefined

                  //getter and setter

//  function nhi function jaisa kam hai par

//                        getter

//     let obj={
//     firstname:"kunal",
//     lastname:"kumar",

//   get fullname(){
//   return `${this.firstname} ${this.lastname}`
// }
// }
// console.log(obj.fullname);
  
// let obj = {
//   name: "kkk"
//   , age: "21",
//   get fullname() {
//   return (`${this.name} ${this.age}`);
      
//   }
// }
// console.log(obj.fullname);

 

                          //setter
//   let obj={
//         firstname:"abcd",
//         lastname:" EFGH",

//         get fullname(){
//                 return `${this.firstname} ${this.lastname}`
//         },
//         set setfirstname(val){
//                 this.firstname=val;
//         }
// }
//  obj.setfirstname="def"
//  console.log(obj.fullname);

// let obj={
// Fname:"kunal",
// Lname:"kumar",

//  get  fullname(){
//  return  `${this.Fname}  ${this.Lname}`
//  },

//   set setfirstname(vlu){
//   this.Fname=vlu

//  }
//  }
// obj.setfirstname="chamar"
// console.log(obj.fullname);

//  OBJECT CLONE

//                                      5 methods cloning
//   1 spread operator
          //  In JavaScript, the spread operator(...) is used to copy, merge, or expand the properties of one object into another object.


    //  let obj1={
    // name:"kunal"
    //  }
    //  let obj2={
    //     ...obj1
    //  }
    //         obj1.name='varun'
    //  console.log(obj2, obj1);

//            let obj1={
//           name:"kunal",
//           address:{
//           streetnum:32,
//           nationality :"indian"
//      }
//      }
//      let obj2={
//         ...obj1
//      }
//             obj1.address.nationality="pakistan"
//             console.log(obj2, obj1);

//2 OBJECT ASSING

//       let obj={
//         name:"kunal"
//       }
//       let obj2=Object.assign({},obj)
//       obj.name="pushpa"
//       console.log(obj,obj2);

//           Q! oops
//   oops based languuage
//    js-prototype based oops
// oops everything in an object
//constuctor fn , class const ,prototype, oops principle,
//koi asa fn hota jisse hum multiple object bhi bana sakte hai

//  function  Person(name,age,prof ){
//         this.name=name
//         this.age=age
//         this.prof=prof
//  }

//  let person1=new Person("chandan", 22, "kuch nhi ")
// // console.log(person1.age);     // jo bhi print karna hoga vo. ka use se hoga
// console.log(person1);             // pura object deta hai



// "Instance ek object hoti hai jo constructor function se banti hai."
// "Constructor se jo object banta hai, usse instance kehte hain."  constructor method bina call ke run ho jata hai

//Q!
    // function Person(name,age,prof){
    //     this.name=name
    //     this.age=age
    //     this.prof=prof
    //    this.fn=function(){   // prent object
    //             console.log(this);
    //      }
    //     }
    // let person1=new Person("kunal", 21, "dance ")

    // person1.fn()

//Q1 constructor inheritance

//      function Animal(name){
//         this.myname=name;

//      }
//      function dog(name,age){
//         Animal.call(this,name)
//         this.age=age
//      }
//          let dog1=new dog("lisa",6)
//          console.log(dog1);

//class
//        1 encapsulatuin
//         2 abstraction
//          3 polymorphism

//        Q1  Jab hum kisi constructor function ya class ke saath new keyword ka use karte hain, toh this us new wale banaye gaye object (instance) ko refer karta hai.

//Q2  Instance ka matlab hota hai — object jo constructor function se banaya gaya ho.
//   function Person(name) {
//        this.name = name;
//                     }
//  const p1 = new Person("Kunal");  //Yahan p1 ek instance hai Person constructor ka.

//Q3
//         !new keyword JavaScript mein:
//         !! Ek naya object banata hai.
//        !!!Constructor function ko call karta hai.
//       !!!!Us naye object ko this keyword ke through constructor mein pass karta hai.
//        !!!! Aur agar constructor khud se kuch return nahi karta, toh woh naya object return kar deta hai.

//Q!
//  class person{  //first letter capital , they are not function
//     // every class has single constructor fun

//       constructor(name,age){    //constructor use karke override krte hai classs ko  band karna
//          this.name=name
//          this.age=age
//       }
//  }
//  let person1=new person("kuku",21) // new keyword instance
//  console.log(person)//  har class ke pass khud ka constructor function hota hai

//   Q! abstraction
// JS mein abstraction functions, objects, aur classes ke zariye ki ja sakti hai.
// class Person{
//          // static ,#
//             #name;  //private
//             constructor(age,name){
//                 this.#name=name
//                 this.age=age
//             }
//             get myname(){
//                 return this.#name
//             }
//             set mynamee(val){
//                 this.#name=val
//             }
//            //  getter setter
//            // private fileds ki value sirf get se le sakte hai
// }
// let person1=new Person( 21,"abc")
// console.log(person1.myname);

//                       Q!
//                       class person{
//                         #name;
//                         constructor(name,age){
//                                 this.age=age
//                                 this.#name= name
//                         }
//                          get fn(){
//                                 return this.#name
//                          }
//                          set myname(vlu){
//                                 this.#name=vlu
//                          }
//                          }
//                          let person1 =new person("kunal",21)
//                         //  console.log(person1.fn);
//   person1.myname='kkk'
//   console.log(person1.fn);

//Q!  inheritence

//        class animals{
//         constructor(name){
//         this.name=name
//         }
//        }
//       // extends
//       class Dog extends animals{
//         //by defualt constructor -animal ka constructor
//         constructor(name,age){
//         super(name)
//          this.age=age
//         }
//       }
//       let dog1=new Dog("abc",10)
//       console.log(dog1);

// Q! polymorphism

//      class animal{
//         constructor(name){
//                 this.name=name
//                 this.fn=function(){
//                         console.log("hello");
//       }
//         }
//      }
//      class Dog extends animal{
//         constructor(name){
//                 super(name)
//                 this.fn=function(a){
//                         console.log("helloooo");
//    }
//         }
//      }
//      let dog1=new Dog('abc')
//      dog1.fn()

   

//Q! 1. Prototype kya hota hai?
//Prototype JavaScript ka ek powerful feature hai jo inheritance ke liye use hota hai.
// Jab tum ek constructor function se naye objects banate ho, to JavaScript un sab objects ke beech common features(properties / methods) share karne ke liye prototype ka use karti hai.
  

//@2. "Set of common/shared properties/methods"
// Prototype ek object hota hai jisme tum common methods ya properties rakh sakte ho.
// Ye cheeze har object instance ke liye accessible hoti hain, bina unhe baar - baar define kiye.


 // @3

// function person(name, age) {
//         this.name = name;
//         this.age = age;
//         this.fn = function () {
//         console.log("hey");
//         };
// }
// person.prototype.printmyname = function () {
// console.log("helo");
// };
// let person1 = new person("kk", 21);
// console.log(person1, person1._proto__);
// person1.printmyname();



//Q! class in prototype/



//         class person{
//                 constructor(name,age){
//                         this.name=name
//                         this.age=age
//             }
//             fn() {
//             }
//  }
//       //  prototype ki trh share hoga dynamic object
6
  //       let person1=new person("lkk",21)
  //       console.log(person1, );





  //DOM
  //                           doucment object model
 
  //Q!  DOM (Document Object Model) ek interface (yaani ek bridge) hai jo HTML page aur JavaScript code ke beech connection banata hai.

  //  Q! Iske through, hum JavaScript ka use karke HTML ke elements ko dekh sakte hain, badal sakte hain, hata sakte hain, ya naye elements create kar sakte hain.

  // Q! Jab hum JavaScript se HTML ko dynamically(yaani bina page reload kiye) badalte hain, tabhi hum dynamic webpages bana pate hain.Jaise, kisi button pe click karte hi kuch naya text aa jaye ya koi photo change ho jaye — yeh sab DOM ke through possible hota hai.

  

  // example 
  // QQ! Chhoti si analogy: Socho HTML ek ghar hai, JavaScript ek aadmi hai, aur DOM ek darwaza hai jiske through aadmi(JavaScript) ghar(HTML) ke andar jakar cheezein(elements) badal sakta hai.




  //HTML==> element ko hum dom m node bolte h

  // let para = document.querySelector('p')
  // //tagname ,class ,, id name

  // console.log(para);



  //  Q!  
  // para.textContent = '<h1> hello world <h1>4 '

  // Q2
  // para.innerHTML = `hello world3 `





  //Q#  node list 
  //   let para1 = document.querySelectorAll('p')
  // console.log(para1); 
  // let para2 = doucment.getElementsByTagName('p')
  //    console.log(para2);


  //  nodelist pr foreach loop kaam krti hai
  //  html collection pr foreach loop nhi chlti

  // para1.forEach((e) => {  Querselector me forEach loop chlti hai
  //   console.log(e);

  // })

  // para2.array.forEach(e => {   .//getElementsByTagName  m forEach loop nhi chlti 
  //   console.log(e);
  // });
  
  
  
  
//                                 //  DOM EVENTS
// let divs = document.getElementsByTagName("div")
//   console.log("divs");
  
// let divv = document.createElement("div")
// divv.textContent = "hello world"
  
// //append  kisi bhi div m ek or div ko  add krna append ke use se

// console.log(divs.length);

// let body = document.querySelector("body")
// body.append(divv)

// console.log(divs.length);
// console.log(divs);


   // jobhi cheeze click se relate hoti hai vo sab bhi mouse se relate hoti hai 
// let btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//   btn.textContent = "clicked"
//   btn.style.background = "orangered"
//   btn.style.borderColor = "black"
//   btn.style.fontsize = "100px"
// })

// // //double click se jo button jaisa tha waisa hi krna mtlb un do krna 
//   //ouse up ,, mouse down 

// btn.addEventListener("bdlclick", () => {  // mouse down ,, mouse up 
//   btn.textContent = "click";
//   btn.style.background = "transparent";
//   btn.style.borderColor = "black";
//   btn.style.fontSize = "16px";
// });


  //  event handler,,,, events object /....keypress?
// let input = document.querySelector("input")
// let para = document.querySelector("p")
 

// input.addEventListener("input", (kuchbhi) => {
//   console.log(kuchbhi.target.value);
//        para.textContent=`hello ${kuchbhi.target.value}`
// })
 

///Q! addEventListener  jise hum apne input ko style kar sakte hai \
   
// input.addEventListener("focus", () => {
//   console.log("focused");
//   input.style.background = "red"
//   input.style.color = "yellow"
//   input.style.borderwidth="2px"
      
// })


               // window

// window.addEventListener("load", ()=> {
// console.log("page loadder");
// })


// let body = document.querySelector("body")
// window.addEventListener("scroll", () => {
//   body.style.background="aqua"
//   })


          
// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault()
//   e.returnValue="change may not be saved "
// })




             //EVENT DELEGATION
           
// Event delegation JavaScript ka ek powerful technique hai jisme hum parent element par event listener lagate hain, aur child elements ke events ko handle karte hain — bina har ek child par listener lagaye.
               

 //is code ko jada use nhi karte 
 
// let list = document.querySelectorAll("ul")
// let lis = document.querySelectorAll("ul")
// lis.forEach((li) => {
//   .aduldEventListener("click", (e) => {
//     ul.textContent = "clicked"
//   })
// })

 // / EVENT DELEGATION

// let ul = document.querySelector('ul')

//   ul.addEventListener("click", (e) => {
//     console.log (e.target.textContent="clicked  ")
//   })



// let nav = document.querySelector("nav")
// let para = document.querySelector("p")
// nav.addEventListener("click", (e) => {
//   e.target.textContent;
//   para.textContent=e.target.textContent
      
//      })


// let out = document.querySelector(".outer")
// let inner = document.querySelector(".inner")
// let innermost = document.querySelector(".innermost")


// out.addEventListener("click", (e) => {
//   e.stopPropagation()
//   console.log("outer");
// })
// inner.addEventListener("click", (e) => {
//   e.stopPropagation()
//   console.log("inner");
// })
// innermost.addEventListener("click", (e) => {
//   e.stopPropagation()
//   console.log("innermost");

// })


// let out = document.querySelector(".outer")
// let inner = document.querySelector(".inner")
// let innermost = document.querySelector(".innermost")


// out.addEventListener("click", (e) => {
//   // e.stopPropagation()
//   console.log("outer");
// },true)
// inner.addEventListener("click", (e) => {
//   // e.stopPropagation()
//   console.log("inner");
// },true)
// innermost.addEventListener("click", (e) => {

//   console.log("innermost");

// },true)




   //git commands

