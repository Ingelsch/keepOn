function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // Her brukes vel regexp, og kanskje "replace" metoden? JAAA!  // variabel vi finner space og underscore
  let regex = /\s+|_+/g;

  /* variabel finner der liten og stor bokstav står i den rekkefølgen */
  let regel = /([a-z])([A-Z])/g;

  /* Kjører regel på str, setter inn bindestrek*/
  console.log(str.replace(regel, "$1-$2"));
  str = str.replace(regel, "$1-$2");

  /* Kjører regex på str, setter inn bindestrek og lager små bokstaver */
  let returneres = str.replace(regex, '-').toLowerCase();
  console.log(returneres);
  return returneres;
}

spinalCase('The_Andy_Griffith_Show');

