let cmpel=["rock","paper","scissors"];
let plyrel=null;

let cmpsay=0;
let plysay=0;

function compselc(){

    let randomindex=Math.floor(Math.random() * cmpel.length);
    return cmpel[randomindex];
}

function war(){

    for (let index = 0; index < 5; index++) {
        plyrel=prompt("lutfen kullanmak istediginiz silahı yaziniz: ");

        if (plyselc()=="rock" && compselc()=="paper") {
            cmpsay++;
            alert("COMPUTER GAMİNG: PAPER   ROUND " + (index+1) + "   COMPUTER WON");
        } 
        else if (plyselc()=="rock" && compselc()=="scissors") {
            plysay++;
            alert("COMPUTER GAMİNG: SCISSORS   ROUND " + (index+1) + "   PLAYER WOM");
        }
        else if (plyselc()=="paper" && compselc()=="rock") {
            plysay++;
            alert("COMPUTER GAMİNG: ROCK   ROUND " + (index+1) + "   PLAYER WON");
        }
        else if (plyselc()=="paper" && compselc()=="scissors") {
            cmpsay++;
            alert("COMPUTER GAMİNG: SCISSORS   ROUND " + (index+1) + "   COMPUTER WON");
        }
        else if (plyselc()=="scissors" && compselc()=="rock") {
            cmpsay++;
            alert("COMPUTER GAMİNG: ROCK   ROUND " + (index+1) + "   COMPUTER WON");
        }
        else if (plyselc()=="scissors" && compselc()=="paper") {
            plysay++;
            alert("COMPUTER GAMİNG: PAPER   ROUND " + (index+1) + "   PLAYER WON");
        }
    }
    if (plysay > cmpsay) {
        alert("MATCH RESULT: PLAYER WON!! ");
        
    } else if (plysay > cmpsay) {
        alert("MATCH RESULT: COMPUTER WON!! ");
    }
    else {
        alert("MATCH RESULT: DRAW");
    }
}

function plyselc(){

    if (plyrel=="rock" || plyrel=="ROCK" || plyrel=="Rock") {
        return "rock";
    }
    else if (plyrel=="paper" || plyrel=="PAPER" || plyrel=="Paper") {
        return "paper";
    }
    else if (plyrel=="scissors" || plyrel=="SCISSORS" || plyrel=="Scissors") {
        return "scissors";
    }
}

object.addEventListener("click",war());   