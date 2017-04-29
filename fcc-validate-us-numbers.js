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
        // Si le numéro commence par le bon indicatif 1 suivi de \s ou de (, on valide et on enlève l'indicatif de la chaine str
        if ((str1stChars==="1 ")||(str1stChars==="1(")) {
            str=str.replace(str1stChars,"");
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
        // si la chaine a une parenthèse ouvrante alors...
        if (parentheseOn!==-1) {          
            // tester si elle est à la bonne position sinon false
            if (parentheseOn!==0) {
                return false;
            } 
            // sinon si bonne position alors...
            else if (parentheseOn===0) {
                // check si parenthèse fermante dans la chaine et si oui
                if (parentheseOff!==-1) {
                    // check si bonne position sinon false
                    if (parentheseOff!==4) {
                        return false;
                    }          
                }
            }            
        }
        return true;
    } // fin if principal
    else if (!str.match(pattern1)) {
        return false;
    }   
} // fin fonction
telephoneCheck("(555)555-5555");