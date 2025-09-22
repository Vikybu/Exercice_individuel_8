function afficherSapin(etages, hauteur_etage) {
    listSign = []
    const signes = ["*", "o", "+"]
    console.log(' '.repeat(etages + hauteur_etage) + '+')
    
    for (j=0; j < etages; j++){
        for (let i = 0; i< (hauteur_etage); i++){
            listSign.append(signes.Math.random())
            console.log(listSign)
            const randomSign = signes[Math.floor(Math.random() * signes.length)]
            console.log(' '.repeat(hauteur_etage + 2 -(i + j)) + '/' + (randomSign.repeat(i + j)) + '|' + (randomSign.repeat(i + j)) + '\\')
        }
    }
    for (let i = 0; i < etages; i ++) {
        console.log((' '.repeat((2 * etages) - 1)) + '#'.repeat(etages))
    }
}


//afficherSapin(3, 3) 

function arrayRandom(a) {
  return a[Math.floor(Math.random() * a.length)];
}


function test(etages, hauteur_etage){
    let listSign = []
    let listFinale = []
    const signes = ["*", "o", "+", "*", "*", "*", "*", "*", "*"] 
    console.log(' '.repeat(etages + hauteur_etage) + '+')
    for (j=0; j < etages; j++){
        for (let i = 0; i< hauteur_etage + 1; i++){
            listSign = []

            listSign.push(' '.repeat(hauteur_etage + 2 -(i + j)))

            listSign.push('/')

            for (let k= 0; k < i + j; k++){
                listSign.push(arrayRandom(signes))
            }
        
            listSign.push('|')

            for (let k= 0; k < i + j; k++){
                listSign.push(arrayRandom(signes))
            }

            listSign.push('\\')

            listSign = listSign.join('')
            listFinale.push(listSign)
        }
    }
    console.log(listFinale.join("\n"))

    for (let i = 0; i < etages; i ++) {
        console.log((' '.repeat((2 * etages) - 1)) + '#'.repeat(etages))
    }

}

test(4, 5)