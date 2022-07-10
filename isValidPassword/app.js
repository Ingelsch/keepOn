/* Write an isValidPassword function
  It accepts 2 arguments: password and username (String)
  Password must:
    Be at least 8 characters
    cannot contain spaces
    cannot contain the username
  If all the requirements are met, return true. else: false

  isValidPassword('89jjlnms','dogLuvr'); > true
  isValidPassword('dogLuvr123','dogLuvr') > false
 */

console.log("hello world");

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;

}
isValidPassword('89jjlnm', 'inge');
isValidPassword('ingen', 'inge');