



/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */
"use strict";

let aQ="jean";
let bBis="Paul";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){//{} defini un bloc d instuction
        return true
    }else{
        return false
    }
}
console.log(result);
