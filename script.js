const inbox = document.getElementById("mood");
const moodbox = document.getElementById("box");

inbox.addEventListener("change", changeColor);

function changeColor(){
    const moood = inbox.value;
if (moood == "angry"){
    box.style.backgroundColor = "red"; }

 else if (moood == "sad"){
        box.style.backgroundColor = "blue"; }

else if (moood == "happy"){
        box.style.backgroundColor = "yellow"; }

else if (moood == "hungry"){
        box.style.backgroundColor = "black"; }


else{
    box.style.backgroundColor = "grey"; }
}

    



