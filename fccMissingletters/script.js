function fearNotLetter(str) {
    console.log(str);
    const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
        return caps;
      }
      )(); 
      let strLengde = str.length;
      console.log(strLengde + 1);
      let erstStr = str[0];
      let sistStr = str.slice(-1);

      console.log("Ligger først " + erstStr + " | " + "ligger sist " + sistStr);

      console.log(letters[caps+26]);

    //identifiser hvilken bokstav som mangler
    //her: hvor i alfabetet starter str-arrayen?
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < letters.length; j++) {
            //console.log(str[i]+ " = " + letters[j]);
            if(str[i] == letters[j]) {
              console.log(str[i]+ " = " + letters[j]);
            }
        }
    }
    return str;
  }
  
  fearNotLetter("stvwx");

  /**Find the missing letter in the passed letter range and return it.
   * If all letters are present in the range, return undefined. 

    fearNotLetter("abce") should return "d".
    fearNotLetter("abcdefghjklmno") should return "i".
    fearNotLetter("stvwx") should return "u".
    fearNotLetter("bcdf") should return "e".
    fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

   * */