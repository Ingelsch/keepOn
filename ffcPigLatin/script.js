/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word does not contain a vowel, just add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
    const consRegx = /^[^aeiou]+/; // collect all letters at word start - that is not a vowel
    let putLast = str.match(consRegx);
    console.log(putLast);
    if(putLast !== null ) {
        console.log(str.replace(consRegx, "").concat(putLast).concat("ay"));
        return str.replace(consRegx, "").concat(putLast).concat("ay");
    } else {
        console.log(str.concat("way"));
        str.concat("way");
    }
    return str;

        /* kan lage ENLINJET if-setning tydelig vist */
    /*const translation = putLast !== null ? str.replace(consRegx, "").concat(putLast).concat("ay") : str.concat("way");
    console.log(translation);
    return translation;*/
}
  
  translatePigLatin("rhythm");

  /*
"california > aliforniacay"     'c' er første, flyttes til slutten og får "ay" etterpå
"consonant > onsonantcay"       'c' er første, flyttes til slutten og får "ay" etterpå
"paragraphs > aragraphspay"     'p' er første, flyttes til slutten og får "ay" etterpå
"glove > oveglay"               'gl' er første, flyttes til slutten og får "ay" etterpå
"algorithm > algorithmway"      'a' er først, legger "way" på slutten
"eight > eightway"              'e' er først, legger "way" på slutten
"schwartz > artzschway"         'sch'  er første, flyttes til slutten og får "ay" etterpå
"rhythm > rhythmay"             ingen vokal! får "ay" på slutten
*/           