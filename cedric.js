// TP 1: Fonction de palyndrome
function palindrome(str) {
   //let chars = str.split('');
   let retour = false;
   for(let i=0 ; i < str.length; i++ ){
       if(str[i] == str[(str.length-1)-i] || str[i]== ('_' + str[(str.length-1)-i])){
         retour = true;
       }
       
  return retour;
   }

}

palindrome("eye");

// TP: 2 Fonction conversion de en chiffre romain.
function convertToRoman(num) {
    let RomanNum= [1000,500,100,90,50,40,10,9,5,4,3,2,1];
    let RomanAlpha =['M','D','C','XC','L','XL','X','IX','V','IV','III','II','I'];
    let conver = '';
    for (let i=0; i<RomanNum.length;i++){
        while(RomanNum[i]<= num){
           conver += RomanAlpha[i];
           num -= RomanNum[i];
        }
    }
 return conver;
}

convertToRoman(36);

