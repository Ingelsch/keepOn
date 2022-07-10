/* A pangram is a sentence that contains every letter of th alphabet, like:
  "The quick brown fox jumps over the lazy dog"
  Write a function called isPangram, which checks to se if a given sentence contains every letter of the alphapet. Make sure to ignore string casting.

    isPangram("The quick brown fox jumps over the lazy dog")< true
    isPangram("The quick brown fox jumps over the lazy dol")< false
  */

function isPangram(str) {
  let skvip = 'abcdefghijklmnopqrstuvwyz';
  str = str.toLowerCase();
  for (const char of skvip) {
    if (str.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}