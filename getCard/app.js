/* Write a getCard() function which returns a random playing card object, like
 {
  value: 'K'
  suit: 'clubs'
 }
 Pick a random value from 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
 Pick a arandom suit from clubs, spades, hearts, diamonds
Return both in an Object
*/

function getCard() {
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  const verdi = Math.floor(Math.random() * values.length);
  const bar = Math.floor(Math.random() * suits.length);

  const value = values[verdi];
  const suit = suits[bar];
  return { value, suit }
}