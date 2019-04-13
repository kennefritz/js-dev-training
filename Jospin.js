/**************** TP1: palindrome  ********************************************/
function palindrome(str) {
  let str1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let str2 = str1.split("").reverse().join("");
  return str1 === str2;
}

palindrome("eye");


/**************** TP1: palindrome  ********************************************/
public function convertToRoman(num){
let nb = num;
  let romanChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let roman = "";
  let div1000 = (parseInt(nb/1000) <=3) ? parseInt(nb/1000) : 3; //convertion is doing up to 300
  
  //Check  the times 1000 appears in entry
  if(div1000 >= 1){
    roman = putRomanChar(div1000, 6, romanChars);
    nb = nb%1000;
  }
  if(parseInt(nb/500)==1 && 900-nb>=0){
    roman += romanChars[5];
    nb = nb % 500;
  }

  let div100 = parseInt(nb/100);
  if(div100 >= 1){
    roman += putRomanChar(div100, 4, romanChars);
     nb = nb % 100;
  }
  
  let div50 = parseInt(nb/50);
  if(div50 == 1 && 100-nb>10){
    roman += romanChars[3];
    nb = nb % 50;
  }
  
  let div10 = parseInt(nb/10);
  if(div10 >= 1){
    roman += putRomanChar(div10, 2, romanChars);
    nb = nb % 10;
  }
  
  switch (nb) {
    case 1: roman += 'I'; break;
    case 2 : roman += 'II'; break;
    case 3 : roman += 'III'; break;
    case 4 : roman += 'IV'; break;
    case 5 : roman += 'V'; break;
    case 6 : roman += 'VI'; break;
    case 7 : roman += 'VII'; break;
    case 8 : roman += 'VIII'; break;
    case 9 : roman += 'IX'; break;
    default: break;
  }
 return roman;
}
/* @number int number of roman character to print. Exemple 4 means put the char 4 times 
@index index of the roman char in the array romanChars
return string, the roman number. Exemple putRomanChar(4, 2, ['I', 'V', 'X', 'L', 'C', 'D', 'M']) should not retun XXXX because it's wrong but returns XL */
function putRomanChar(number, index, romanChars){
  let res = "";
  switch (number) {
    case 1: res = romanChars[index]; break;
    case 2 : res = romanChars[index]+romanChars[index]; break;
    case 3 : res = romanChars[index]+romanChars[index]+romanChars[index]; break;
    case 4 : res = romanChars[index]+romanChars[index+1]; break;
    case 9 : res = romanChars[index]+romanChars[index+2]; break;
    default: break;
  }
  return res;
}

convertToRoman(684);

/**************** TP3:   rot13 ********************************************/
function rot13(str) { // LBH QVQ VG!
  let res = '';
  for(let i=0; i<str.length; i++){
    let asciiCode = str[i].charCodeAt(0);
    if(65 <= asciiCode && asciiCode <= 90){
      let nextAscii = (asciiCode+13<=90) ? asciiCode+13 : 65+asciiCode+12-90;
      res += '' + String.fromCharCode(nextAscii);
    }else{
      res += str[i];
    }
  }console.log(res);
  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

