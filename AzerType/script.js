/* let listeMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0
function devinerlesMots(){
    for ( i = 0; i < listeMots.length; i++ ){
    motsEcris = prompt(`Ecrivez ${listeMots[i]}`)
    if (motsEcris === listeMots[i]){
    score++
    console.log(score)
}
}
}

devinerlesMots()*/

let motADeviner = document.querySelector(".motADeviner")

let Valider = document.querySelector(".motEcris button")

let motEcris = document.querySelector(".motEcris input")

let score = document.querySelector(".score span")

let timer = document.querySelector(".timer")

let sonloose = new Audio('./Son/loose.wav')

let sonwin = new Audio('./Son/piece.wav')

let listeMots = ["Cachalot", "Pétunia", "Serviette","Armoire","Construction","Certainement","Pourquoi","Adjectif","Eau","Raisonnement",]

let scoretotal = 0 

score.innerText = `${scoretotal}`

indiceMot = 0 


// passe au mot suivant et reset la valeur dans motEcris
function motsuivant(){
    motADeviner.innerText = listeMots[indiceMot]
    motEcris.value = ''
}

// affiche le premier mot lors du chargement de la page
motsuivant()


// augmente le score de 1 si le mot ecris est le même que celui de la liste de mot 
    function check(){ 
    if (motEcris.value === listeMots[indiceMot] && tempsrestant > 0){
     scoretotal++ 
     sonwin.play()
    }
    else if (tempsrestant > 0) {
    sonloose.play()
    }
    score.innerText = `${scoretotal}`
    indiceMot++                         // augement l'indice du mot qui permet de passer au mot suivant 

    if (indiceMot < listeMots.length && tempsrestant > 0){
        motsuivant()                        // Si la longeur du table est inférieur au nombre de mot qu'il contient le jeu continue 
    }

    else {
        console.log('fin du jeux')          // sinon fin du jeu 
    }
}

// Quand tu clic sur Valider applique la fonction check
Valider.addEventListener('click', check)

//quand tu appuies sur entrer applique la fonction check et lance le timer si celui n'est pas encore lancé
let timerstarted = false
motEcris.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        check()
    }
    if(!timerstarted){
        clock()
        timerstarted = true
    }
})


// creer un compte à rebour de 30s
let tempsrestant = 30

function clock (){
    setInterval(function() {
        if (tempsrestant > 0){
        tempsrestant--
        timer.innerText = tempsrestant
    } else {
        timer.innerText = "Time out !"
    }
    }, 1000)
} 
