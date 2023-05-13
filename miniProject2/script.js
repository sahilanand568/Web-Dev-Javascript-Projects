let count = 0;
const x = document.getElementById("prevbtn");
const y = document.getElementById("nxtbtn");
// console.log(x.classList);
let a=document.querySelector('.line');
const z=document.querySelectorAll(".circle");
// console.log(z);
x.addEventListener('click', () => {
    z[count].style.borderColor="#c2bdbd";
    count--;
    if(count==0)
    a.classList.remove('select');
    if(count==1)
    a.classList.remove('select1');
    if(count==2)
    a.classList.remove('select2');
    // console.log(count);
    if (count <= 0){
        x.disabled = true;
        x.style.cursor = "not-allowed";
        x.style.backgroundColor="#c2bdbd";
    }
    y.disabled = false;
    y.style.cursor = "pointer";
    y.style.backgroundColor="#00d9ff";
})

y.addEventListener('click', () => {
    count++;
    if(count==1)
    a.classList.add('select');
    if(count==2)
    a.classList.add('select1');
    if(count==3)
    a.classList.add('select2');
    z[count].style.borderColor="#00d9ff"
    // console.log(count);
    if (count >= 3) {
        y.disabled = true;
        y.style.cursor = "not-allowed";
        y.style.backgroundColor="#c2bdbd";
    }
    x.disabled = false;
    x.style.cursor = "pointer";
    x.style.backgroundColor="#00d9ff";
})