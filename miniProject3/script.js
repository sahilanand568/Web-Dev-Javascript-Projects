const expand = document.getElementsByClassName('btn');
const inputt = document.getElementById('inputt');
console.log(expand);
console.log(inputt);
// inputt.style.visibility="visible";
inputt.hidden = true;
// console.log(inputt);
expand[0].addEventListener('click', () => {
    if (inputt.hidden) {
        inputt.style.animationName = 'Sahil1';
        inputt.hidden = !inputt.hidden;
    }
    else {
        setTimeout(function () {
            inputt.hidden = !inputt.hidden;
        }, 790);
        inputt.style.animationName = 'Sahil2';
    }
    // if(inputt.style.visibility=="visible")
    // inputt.style.visibility="hidden";
    // else
    // inputt.style.visibility="visible"
    // console.log(inputt.hidden);
})


// NOTE:Notice the difference between inputt.hidden method and inputt.style.visibility
// In case of inputt.hidden method, the search bar moves to the center of the page whereas in case of inputt.style.visibility, the search remains as it is. 