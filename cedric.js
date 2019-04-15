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

//TP3: Fonction ROT13
function rot13(str) { // LBH QVQ VG!
   let newword =[];
       let strs = str.split(' ')
     for (let i= 0; i<strs.length; i++){
          if (strs[i]=="A"){
            newword[i]= 'N'; 
          }else if(strs[i]=="N"){
            newword[i]= 'A'; 
          }
          if(strs[i]=="B"){
                newword[i]='O';
          }else if(strs[i]=="O"){
            newword[i]='B';
          }
        if(strs[i] =='C'){
           newword[i] ='P';
        }else if( strs[i] == 'P'){newword[i] ='C';}
         if(strs[i]== 'D'){
           newword[i]='Q';
         }else if(strs[i]== 'Q'){newword[i]='D';}
         if(strs[i]== 'E'){
            newword[i]= 'R';
         }else if(str[i]= 'R'){ newword[i]= 'E';}
         if(strs[i]== 'F'){
            newword[i]='S';
         }else if(strs[i]=='S'){ newword[i]='F';}
         if(str[i]== 'G'){
            newword[i]='T';
         }else if(strs[i]=='T'){ newword[i]='G';}
         if(str[i]=='H'){
            newword[i]='U';
         }else if(strs[i]=='U'){ newword[i]='H';}
         if(str[i]=='I'){
            newword[i]='V';
         }else if(strs[i]=='V'){ newword[i]='I';}
         if(str[i]=='J'){
            newword[i]='W';
         }else if(strs[i]=='K'){
            newword[i]='X';
         }else if(str[i]=='X'){ newword[i]='K';}
          if(str[i]=='L'){
             newword[i]='Y';
          }else if(strs[i]=='Y'){ newword[i]='L';}
          if(str[i]=='M'){
             newword[i]='Z';
          }else if(strs[i]=='Z'){ newword[i]='M';}
   
       
     } ;
        
       
       return concat(...newword);
   }
   
   // Change the inputs below to test
   rot13("SERR");