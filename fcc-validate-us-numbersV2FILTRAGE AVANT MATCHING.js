function telephoneCheck(str) {
"use strict";
var pattern1=/(\(?)\d{3}(\)?|\s?|-?)(\s?|-?)\d{3,4}(\s?|-?)\d{3,4}/gi; 
var strLength=str.length;
var strMinLength=10;
var strMaxLength=14;  
var str1stChar=str.substring(0,1);
var str1stChars=str.substring(0,2);
var str2ndChar=str.substring(1,2);
var parentheseOn=str.indexOf("(");
var parentheseOff=str.indexOf(")");
var espace=str.indexOf(" ");
// SI INDICATIF, IL DOIT ETRE 1
// si espace mal placé alors false
if ((espace!==-1)&&(espace!==1)) {
    return false;
}
// si indicatif autre que 1 alors false
if ((str2ndChar===" ")&&(str1stChar!=="1")) {
    return false;
}
// Si le numéro commence par le bon indicatif 1 suivi de (, on check la parenthèse fermante
if (str1stChars==="1(") {
    // si la parenthèse fermante n'existe pas ou est mal placée alors false
    if ((parentheseOff===-1)||(parentheseOff!==(parentheseOn+4))) {
        return false;            
    }
    // si le format est ok on enlève l'indicatif et on laisse les parenthèses
    str=str.replace(str1stChar,"");          
    // on met à jour les variables liées à la chaine
    str1stChar=str.substring(0,1);
    str1stChars=str.substring(0,2);
    str2ndChar=str.substring(1,2);
    parentheseOn=str.indexOf("(");
    parentheseOff=str.indexOf(")");      
}          
// Sinon si le numéro commence par le bon indicatif 1 suivi de \s, on les enlève de la chaine 
else if (str1stChars==="1 ") {
    // CHECK PARENTHESES INVALIDES
    // si la chaine a une parenthèse alors check position          
    if ((parentheseOn!==-1)||(parentheseOff!==-1)) {  
      // si une seule parenthese ou 2 en mauvaise position alors false
      if ((parentheseOn!==2)||(parentheseOff!==6)) {
        return false;            
      }
    }      
    str=str.replace(str1stChars,"");
    // on met à jour les variables liées à la chaine
    str1stChar=str.substring(0,1);
    str1stChars=str.substring(0,2);
    str2ndChar=str.substring(1,2);
    parentheseOn=str.indexOf("(");
    parentheseOff=str.indexOf(")");      
}    
// s'il y a un indicatif, ca doit etre 1 suivi d'espace ou de ( sinon false
if ((str2ndChar===" ")&&(str1stChar!=="1")) {
    return false;
}
// on compare str à notre regex et si ça match...
if (str.match(pattern1)) { 
    return true;
}
else if (!str.match(pattern1)) {
    return false;
}   
} // fin fonction
telephoneCheck("1 (555) 555-5555");
