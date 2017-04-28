function telephoneCheck(str) {
  "use strict";
  var pattern1=/(\(?)\d{3}(\)?|\s?|-?)(\s?)\d{3,4}(\s?|-?)\d{3,4}/gi; 
  var strLength=str.length;
  var strMinLength=10;
  var strMaxLength=14;  
  var str1stChar=str.substring(0,1);
  var str1stChars=str.substring(0,2);
  var str2ndChar=str.substring(1,2);
  var parentheseOn=str.indexOf("(");
  var parentheseOff=str.indexOf(")");  
  // Si le numéro semble dans un bon format alors on teste
  if (str.match(pattern1)) {
    // Si le numéro commence par le bon indicatif 1 suivi de \s, on valide et on enlève l'indicatif de la chaine str
    if (str1stChars==="1 ") {
      str=str.replace("1 ","");
      // on met à jour les variables liées à la chaine
      str1stChar=str.substring(0,1);
      str1stChars=str.substring(0,2);
      str2ndChar=str.substring(1,2);
      parentheseOn=str.indexOf("(");
      parentheseOff=str.indexOf(")");      
    }    
    // s'il y a un indicatif, mais que c'est pas le bon, alors false
    if ((str2ndChar===" ")&&(str1stChar!=="1")) {
      return false;
    }
    // si les parenthèses ne sont pas en place ou qu'il en manque 1/2 alors false;
    if (((parentheseOn===0)&&(parentheseOff!==4))||((parentheseOff===4)&&(parentheseOn!==0))) {
      return false;
    }  
   return true;
  }  
  else if (!str.match(pattern1)) {
    return false;
  }   
}
telephoneCheck("1 (555) 555-5555");