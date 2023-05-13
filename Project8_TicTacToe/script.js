let count = 0;
const gridItems = document.querySelectorAll(".gridItem");
const gridC = document.getElementById("gridContainer")
const button = document.getElementById("btn");
const image = document.getElementsByTagName("img");
const variable = document.getElementById("variable");
const nbL = Array.from(document.getElementsByClassName("noBorderL"));
const nbR = Array.from(document.getElementsByClassName("noBorderR"));
const nbT = Array.from(document.getElementsByClassName("noBorderT"));
const nbB = Array.from(document.getElementsByClassName("noBorderB"));
const diag1 = Array.from(document.getElementsByClassName("d1"));
const diag2 = Array.from(document.getElementsByClassName("d2"));
const row2 = Array.from(document.getElementsByClassName("r2"));
const col2 = Array.from(document.getElementsByClassName("c2"));

gridC.addEventListener('click', checkBoxes);

button.addEventListener('click', uncheckBoxes);

// This function is invoked when a box(among the 9 boxes) is clicked

function checkBoxes(e) {

    // Note that here e is an EVENT OBJECT 
    
    if (count % 2 == 0) {
        if (e.target.textContent == "") {
            e.target.innerHTML = "<audio></audio>";
            e.target.innerHTML += "<h2>X</h2>";
            count++;
            variable.innerText = "Turn for 0";
        }
    }
    else {
        if (e.target.textContent == "") {
            e.target.innerHTML = "<audio></audio>";
            e.target.innerHTML += "<h2>0</h2>";
            count++;
            variable.innerText = "Turn for X";
        }
    }
    if(count==9){
        variable.innerText = "It's a draw";
    }

    // Setting attribute to audio tag 
    e.target.children[0].setAttribute("src","ytmp3free.cc_click-sound-effect-youtubemp3free.org.mp3")
    e.target.children[0].play();
    
    // gridItems.forEach((element)=>{
    //     element.innerHTML="<h1>X</h1>";
    //     // element.getElementsByClassName.pointerEvents="none";
    // })
    gameStopCheck(nbL);
    gameStopCheck(nbR);
    gameStopCheck(nbT);
    gameStopCheck(nbB);
    gameStopCheck(diag1);
    gameStopCheck(diag2);
    gameStopCheck(row2);
    gameStopCheck(col2);
}

// Function for Reset Button 

function uncheckBoxes() {

    gridItems.forEach((element) => {
        element.innerHTML = "";
    })

    gridC.addEventListener('click', checkBoxes);
    count = 0;
    variable.innerText = "Turn for X";
    image[0].classList.remove("show");
}

// Function to check if any Player has won or not 

function gameStopCheck(arr) {

    let check = arr[0].innerHTML;

    arr.forEach((element) => {
        if (element.innerHTML != "") 
            check = element.innerHTML;
    })

    if (check == "")
        return false;

    let flag = true;

    arr.forEach((element) => {
        if (element.innerHTML != check)
            flag = false;
    })

    if (flag) 
    {
        gridC.removeEventListener('click', checkBoxes);
        image[0].classList.add("show");

        if (count % 2 == 0) 
            variable.innerText = "0 Won"
        else 
            variable.innerText = "X Won"
    }
}