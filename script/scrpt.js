let cmpel=["rock","paper","scissors"];
const tas=document.querySelector("#tas");
const kagit=document.querySelector("#kagit");
const makas=document.querySelector("#makas");

let cmpsay=0;
let plysay=0;

const container = document.querySelector('.alt');
const score = document.createElement('div');
const winner = document.createElement('div');

winner.classList.add('winner');
score.classList.add('score');

container.appendChild(score);
container.appendChild(winner);

function compselc(){

    let randomindex=Math.floor(Math.random() * cmpel.length);
    return cmpel[randomindex];
}   

tas.addEventListener('click',wart);
kagit.addEventListener('click',wark);
makas.addEventListener('click',warm);

function wark(){
    
    if (compselc()=="rock") {
        plysay++;
        score.textContent="Paper beats Rock Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    else if (compselc()=="scissors") {
        cmpsay++;
        score.textContent="Scissors beats Paper Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    else if (compselc()=="paper") {
        score.textContent="Tie!! "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    play();
}
function warm() {
    
    if (compselc()=="rock") {
        cmpsay++;
        score.textContent="Rock beats Scissors Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    else if (compselc()=="paper") {
        plysay++;
        score.textContent="Scissors beats Paper Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    else if (compselc()=="scissors") {
        score.textContent="Tie!! "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }  
    play();
}
function wart() {

    if (compselc()=="paper") {
        cmpsay++;
        score.textContent="Paper beats Rock Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    } 
    else if (compselc()=="scissors") {
        plysay++;
        score.textContent="Rock beats Scissors Score: "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    else if (compselc()=="rock") {
        score.textContent="Tie!! "+"Player-"+plysay +' ~ '+"Computer-"+cmpsay;
    }
    play();
}

function play() {

    if (plysay<6 || cmpsay<6) {

        if (plysay == 5 || cmpsay == 5) {

            tas.removeEventListener('click',wart)
            kagit.removeEventListener('click',wark)
            makas.removeEventListener('click',warm)

            if (cmpsay < plysay) {
                alert("MATCH RESULT: PLAYER WON!!");
                console.log("aferin")
                winner.textContent="You Win!";
            } 
            else {
                alert("MATCH RESULT: COMPUTER WON!!");
                winner.textContent="You Lose!";
                console.log("mal")
            }
        }
    }    
}
