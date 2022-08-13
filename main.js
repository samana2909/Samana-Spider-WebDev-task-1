const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const startbtn = document.getElementById('start');
const btn1 = document.getElementById('player1button');
const btn2= document.getElementById('player2button'); 
const table1 = document.getElementById('table1');
const player1wins = document.getElementById('player1wins');
const player2wins = document.getElementById('player2wins');
const turns1 = document.getElementById("turns1")
const turns2 = document.getElementById("turns2")
const array1=[0,0,0,0,0]; /*array1 and array2 contain the number of body parts/gun/bullets each box has*/
const array2=[0,0,0,0,0]; /* array1 is for player 1 and array2 is for player */

function player1() {
    number2.style.display='none';
    number1.style.display='block';
    /*generating randome numbers from 1 to 5*/
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    number1.textContent = randomNumber;

    turns1.textContent-=1;/*keeps track of the turns*/
    index=randomNumber-1;
    array1[index]+=1;
    const image = new Image();
    table1.rows[randomNumber].cells[1].innerHTML="";

    /*There are totally 8 parts that can be added:
    (head,body line,legs,hands,gun,3 bullets)
    After these 8 no other part can be added unless it's shot and the human starts getting built again*/

    if (array1[index]===1){image.src= 'images/head.png';}
    else if (array1[index]===2){image.src= 'images/body.png';}
    else if (array1[index]===3){image.src= 'images/legs.png';}
    else if (array1[index]===4){image.src= 'images/hands.png';}
    else if (array1[index]===5){image.src= 'images/gun.png';}
    else if (array1[index]===6){image.src= 'images/gun-1b.png';}
    else if (array1[index]===7){image.src= 'images/gun-2b.png';}
    else if (array1[index]>=8){image.src= 'images/gun-3b.png';}
    table1.rows[randomNumber].cells[1].appendChild(image);

    btn2.style.display='block'
    btn1.style.display='none'
    if (array1[index]>=6 && array2[index]<=8) /* Each human can get only 3 bullets */
    {
        var num1 = prompt("Enter a box(Player-2's) to shoot");
        array2[num1-1]=0;
            table1.rows[num1].cells[2].innerHTML=""}
    }


function player2() {
    number1.style.display='none';
    number2.style.display='block';
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    number2.textContent = randomNumber;
    turns2.textContent-=1;
    index=randomNumber-1;
    array2[index]+=1;
    const image = new Image();
    table1.rows[randomNumber].cells[2].innerHTML=""
    if (array2[index]===1){image.src= 'images/head.png';}
    else if (array2[index]===2){image.src= 'images/body.png';}
    else if (array2[index]===3){image.src= 'images/legs.png';}
    else if (array2[index]===4){image.src= 'images/hands.png';}
    else if (array2[index]===5){image.src= 'images/gun.png';}
    else if (array2[index]===6){image.src= 'images/gun-1b.png';}
    else if (array2[index]===7){image.src= 'images/gun-2b.png';}
    else if (array2[index]>=8){image.src= 'images/gun-3b.png';}
    table1.rows[randomNumber].cells[2].appendChild(image);
    btn1.style.display='block'
    btn2.style.display='none'
    if (array2[index]>=6 && array2[index]<=8)/* Each human can get only 3 bullets */
        {var num2 = prompt("Enter a box(Player-1's) to shoot");
        array1[num2-1]=0;
        table1.rows[num2].cells[1].innerHTML=""}

    /*The game ends after each player gets 30 turns.
    The winner is declared based on how complete the humans in that player's boxes are.
    Hence, the sum of the elements in array1 and array2 are calculated and compared. */
    
    if(turns2.textContent<1){
        /*Some elements in array1 could be greater than 8.
        But the maximum number of parts is 8 so they are reduced to 8 before the sum is calculated.*/
        let sum1 = 0;
        for (let i = 0; i < 5; i++) {
            if (array1[i]>8){array1[i]=8};
            sum1 += array1[i];}
        let sum2 = 0;
        for (let i = 0; i < 5; i++) {
            if (array2[i]>8){array2[i]=8};
            sum2 += array2[i];}

        /*declaring the winners*/   
        if (sum1>sum2){player1wins.style.display='block';}
        else {player2wins.style.display='block';}

        btn2.style.display='none';
        btn1.style.display='none';
        number1.style.display='none';
        number2.style.display='none';
    }
    }

startbtn.addEventListener('click',function(){btn1.style.display='block'},onclick=function(){startbtn.style.display='none'});
btn1.addEventListener('click',player1);
btn2.addEventListener('click',player2);
