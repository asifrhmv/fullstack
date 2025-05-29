// let fullName=prompt("Adinizi daxil edin:");
// let cleanName=fullName.replaceAll(" ","");
// let len=cleanName.length;
// console.log(len);
// ---------------------------Task 10


// let fullName=prompt("Ad Soyadinizi daxil edin:");
// let parts=fullName.trim().split(" ");
// let ad = parts[0].charAt(0).toUpperCase();
// let soyad= parts[1].charAt(0).toUpperCase();
// console.log(ad+"."+soyad)
// --------------------------------Task 11

// let fullName=prompt("Ad Soyad ve Ata adinizi daxil edin:")
// let parts=fullName.trim().split(" ");
// let ad= parts[0].charAt(0).toUpperCase();
// let soyad= parts[1].charAt(0).toUpperCase();
// let ata=parts[2].charAt(0).toUpperCase();
// console.log(ad+"."+soyad+"."+ata)

// -----------------------------------------bonus


// let fullName=prompt("Adinizi ve soyadinizi daxil edin:");
// let parts=fullName.trim().split(" ");
// let ad= parts[0];
// let soyad=parts[1];
// console.log(soyad+" "+ad);

// ------------------------------------Task 12


// let eded1=Number(prompt("1 ci ededi daxil edin:"));
// let eded2=Number(prompt("2 ci ededi daxil edin:"));

// console.log("Ededlerin cemi:"+(eded1+eded2));
// console.log("Ededlerin hasili:"+(eded1*eded2));
// console.log("Ededlerin ferqi:"+(eded1-eded2));
// console.log("Ededlerin nisbeti:"+(eded1/eded2));

// --------------------------------------Task 14


// let say1=12345;
// let say2=98765;
// let op=(say1*say2).toString();
// console.log(op.charAt(7));

// -------------------------------------Task 15


// Task 17


// let eded=prompt("4 reqemli bir say daxil edin:");
// let reqem=eded.split("");
// let reqem1=reqem[0];
// let reqem2=reqem[1];
// let reqem3=reqem[2];
// let reqem4=reqem[3];
// let netice=Number(reqem1)+Number(reqem2)+Number(reqem3)+Number(reqem4);
// console.log("Ededinizin reqemleri cemi:"+netice);


// Task 18


// let ad=prompt("Adinizi daxil edin:");
// let soyad=prompt("Soyadinizi daxil edin:");

// console.log(`Salam ${ad} ${soyad} !`);

// Task 19

// let qiymet=prompt(`Zehmet olmasa qiymeti manat ve qepikle daxil edin:`)
// let hisse=qiymet.split(".");
// let manat=hisse[0];
// let qepik=hisse[1];
// console.log(`${manat} manat,${qepik} qepik`)


// task 20

// let maas=Number(prompt(`Vergiden sonraki maashinizi daxil edin:`))
// tamMaas=maas/0.87
// console.log(`Vergi chixili Maashiniz:${maas}
//     Vergi:13%
//     Tam maashiniz:${tamMaas}`);


// task 21


// let tamAd=prompt(`Ad Soyad ve Ata adinizi daxil edin:`);
// let hisse=tamAd.split(/\s/);
// let ad= hisse[0];
// let soyad=hisse[1];
// let ata=hisse[2];
// console.log(`${soyad}.${ad[0]}.${ata[0]}`);



//task 22

// let mebleg=Number(prompt(`Emanet meblegini daxil edin:`));
// let muddet=Number(prompt(`Muddeti daxil edin:`));
// let faiz=Number(prompt(`Faizi daxil edin;`))
// faiz=faiz/100;
// let umumiMebleg=mebleg+(mebleg*muddet*faiz);
// alert(`Umumi mebleg:`+umumiMebleg)


// task 23

// let a=10;
// let b=20;
// a<15
// a=10
// a*1.5<20


//task 24


// let yas=Number(prompt(`Yashinizi daxil edin:`))

// if(yas>0 && yas<18){
//     alert(`Acces Denied !`)
// }
// else{
//     alert(`Acces Granted !`)
// }



// task 26


// let il=number(prompt("Bir il daxil edin:"));
// if(il%4==0){
//     alert(`Daxil etdiyiniz il uzun ildir !`)
// }
// else{
//     alert(`Daxil etdiyiniz il uzun il deyil !`)
// }

//task27


// let id = Number(prompt(`Enter product id:`))
// switch (id) {

//     case 1:
//         alert(`Available 10 pcs.`)
//         break

//     case 2:
//         alert(`Available 256 pcs.`)
//         break

//     case 3:
//         alert(`Available 53 pcs.`)
//         break

//     case 4:
//         alert(`There are 3 available.`)
//         break

//         default:
//             alert(`Out of stock`)

// }


// task 34

// let eded=Number(prompt(`Eded daxilmedin:`));
// if(eded>0){
//     alert(`Eded musbetdir !`)
// }
// else if(eded<0){
//     alert(`Eded menfidir !`)
// }
// else if(eded==0){
//     alert(`Eded 0-dir !`)
// }



//task 35

// let a = 5, b = 8, c = 3;

// if(a>b && a>c){
//     alert(`En boyuk eded ${a}-dir !`)
// }
// else if(b>a && b>c){
//     alert(`En boyuk eded ${b}-dir !`)
// }
// else if(c>a && c>b){
//     alert(`En boyuk eded ${c}-dir !`)
// }



// task 36


// let eded=Number(prompt(`Ededi daxil edin !`))
// let result=eded%2==0?(`Cut eded`):(`Tek eded`)
// alert(result)


//task 37

// let teref=Number(prompt(`Kvadratin bir terefini daxil edin`))
// let sahe=teref*teref
// let perimetr=teref*4

// alert(`Kvadratin terefi:${teref}
//     Kvadratin sahesi:${sahe}
//     Kvadratin perimetri:${perimetr}`)



//task 38

// let eded=Number(prompt(`Balinizi daxil edin:`))
// switch(true){

// case (eded>0 && eded<60):
//     alert(`Zeif`)
//     break
// case (eded>=60 && eded<75):
//     alert(`Orta`)
//     break
// case (eded>=75 && eded<90):
//     alert(`Yaxshi`)
//     break
// case (eded>=90 && eded<=100):
//     alert(`Ela`)
//     break
//     default:
//         alert(`Zehmet olmasa balinizi duzgun daxil edin !`)

// }


// task 39

// let eded=Math.floor(Math.random()*100)

// if(eded>0 && eded<=50){
//     alert(`Eded : ${eded}
//         Eded 0-50 araligindadir !`)
// }


//task 40

// let a = 5, b = 3
// operator = prompt(`Operatoru daxil edin(+;-;/;*)`)
// switch (operator) {
//     case "/":
//         alert(`a=5;b=3
//             Netice :${a / b}`)
//         break
//     case "*":
//         alert(`a=5;b=3
//                 Netice: ${a * b}`)
//         break
//     case "+":
//         alert(`a=5;b=3
//                     Netice: ${a + b}`)
//         break
//     case "-":
//         alert(`a=5;b=3
//                         Netice: ${a - b}`)
//         break
//     default:
//         alert(`Operatoru duzgun daxil edin`)
// }