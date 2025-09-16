function afficherSapin(etages, hauteur_etage) {
  console.log(' '.repeat(etages + hauteur_etage +1) + '+')
    for (j=0; j < etages; j++){
        for (let i = 0; i< (hauteur_etage); i++){
        console.log(' '.repeat(hauteur_etage + 2 -(i + j)) + '/' + ('*'.repeat(i + j)) + '|' + ('*'.repeat(i + j)) + '\\')
        }
    }
    for (let i = 0; i < etages; i ++) {
        console.log((' '.repeat((2 * etages) - 1)) + '#'.repeat(etages))
    }
}


afficherSapin(3, 3) 