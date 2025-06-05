//1.

// function activeNow(a){
// return a + " "+"Is active now !"

// }
// console.log(activeNow("Asif"));
// console.log(activeNow("Azer"));
// console.log(activeNow("Togrul"));


//2.

// function BoyukEded(a,b,c){
// if(a>=b && a>=c){
//     return a;
// }
// else if(b>=a && b>=c){
//     return b;
// }
// else{
//     return c;
// }
// }

// let netice=BoyukEded(14,24,34)
// console.log("Ededlerin en boyuyu:"+netice);



//3.

// function konvertasiya(a,b){

//     //a-dollar mebleg
//     //b-rubl mebleg
// a=a*75;
// return(a+b);

// }

// let balans=konvertasiya(20,1200)
// console.log("Bütün depozitlər üzrə məbləğ:"+balans);

//4.

// function NumbertoLetter(){
//     let eded=prompt("1-100 arasi eded daxil edin:")
// let tekler=["","Bir","iki","Uc","Dord","Besh","Alti","Yeddi","Sekkiz","Doqquz"];
// let onlar=["","On","Iyirmi","Otuz","Qirx","Elli","Altmish","Yetmish","Seksen","Doxsan"];
// if(eded<=0 && eded>=100){
//     alert("Eded 1-100 araliginda olmalidir !");
//     return;
// }
// if(eded<10){
//     console.log(tekler[eded]);
// }
// else if(eded==10){
//     console.log(onlar[Math.floor(eded/10)]);
// }
// else{
// let ondaliq=Math.floor(eded/10);
// let teklik=eded%10;
// console.log(onlar[ondaliq]+" "+tekler[teklik])
// }
// }


// NumbertoLetter()

// //5.

// function EdedKicik(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }


//6      


// function OperateNumber(a, b, c) {
//     switch (c) {

//         case "+":
//             console.log(a + b);

//             break

//         case "-":
//             console.log(a - b);
//             break

//         case "/":
//             console.log(a / b);
//             break

//         case "*":
//             console.log(a * b);

//         default:
//             console.log("Duzgun operatoru daxil edin !");

//     }


// }


// OperateNumber(5,6,"+")



//7
// let eded = Number(prompt("6 reqemli ededi daxil edin:"))
// function isLucky(eded) {
//     let eded1 = eded % 1000;
//     let eded2 = Math.floor(eded / 1000);
//     let toplam = 0;
//     let toplam2 = 0;
//     while (eded1 > 0) {
//         let sonReqem = eded1 % 10;
//         toplam = toplam + sonReqem;
//         eded1 = Math.floor(eded1 / 10)
//     }
//     while (eded2 > 0) {
//         let sonReqem2 = eded2 % 10;
//         toplam2 = toplam2 + sonReqem2;
//         eded2 = Math.floor(eded2 / 10);
//     }
//     if (toplam == toplam2) {
//         console.log("It is a Lucky Number !");
//     }
//     else { "Its not a lucky Number !" }
// }


//8




function CapitalizeWords(metn){
let sozler= metn.split(" ")
let i=0;
while(i < sozler.length){
let soz=sozler[i];
sozler=soz.char
}
}