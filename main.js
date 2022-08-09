const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const startbtn = document.getElementById('start');
const btn1 = document.getElementById('player1button');
const btn2= document.getElementById('player2button'); 
const table1 = document.getElementById('table1');
const player1wins = document.getElementById('player1wins');
const player2wins = document.getElementById('player2wins');
const reset = document.getElementById('reset');
const array1=[0,0,0,0,0];
const array2=[0,0,0,0,0];
function player1() {
    number2.style.display='none';
    number1.style.display='block';
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    number1.textContent = randomNumber;
    index=randomNumber-1;
    array1[index]+=1;
    const image = new Image();
    table1.rows[randomNumber].cells[1].innerHTML=""
    if (array1[index]===1){image.src= 'images/head.png';}
    else if (array1[index]===2){image.src= 'images/body.png';}
    else if (array1[index]===3){image.src= 'images/legs.png';}
    else if (array1[index]>=4){image.src= 'images/hands.png';}
    table1.rows[randomNumber].cells[1].appendChild(image);
    btn2.style.display='block'
    btn1.style.display='none'
    var count=0
    if (array1[0]>=4){var count=count+1};
    if (array1[1]>=4){var count=count+1};
    if (array1[2]>=4){var count=count+1};
    if (array1[3]>=4){var count=count+1};
    if (array1[4]>=4){var count=count+1};
    if (count===5){
        btn2.style.display='none';
        btn1.style.display='none';
        player1wins.style.display='block';
        number1.style.display='none';
        number2.style.display='none';
    }}
function player2() {
    number1.style.display='none';
    number2.style.display='block';
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    number2.textContent = randomNumber;
    index=randomNumber-1;
    array2[index]+=1;
    const image = new Image();
    table1.rows[randomNumber].cells[2].innerHTML=""
    if (array2[index]===1){image.src= 'images/head.png';}
    else if (array2[index]===2){image.src= 'images/body.png';}
    else if (array2[index]===3){image.src= 'images/legs.png';}
    else if (array2[index]>=4){image.src= 'images/hands.png';}
    table1.rows[randomNumber].cells[2].appendChild(image);
    btn1.style.display='block'
    btn2.style.display='none'
    var count=0
    if (array2[0]>=4){var count=count+1};
    if (array2[1]>=4){var count=count+1};
    if (array2[2]>=4){var count=count+1};
    if (array2[3]>=4){var count=count+1};
    if (array2[4]>=4){var count=count+1};
    if (count===5){
        btn2.style.display='none';
        btn1.style.display='none';
        player2wins.style.display='block';
        number1.style.display='none';
        number2.style.display='none';
    }}

startbtn.addEventListener('click',function(){btn1.style.display='block'},onclick=function(){startbtn.style.display='none'});
btn1.addEventListener('click',player1);
btn2.addEventListener('click',player2);



