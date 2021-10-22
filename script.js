
console.log('Welcome to Tac Tac Toe');
let music = new Audio ("sound/hin.m4a"); 
let audioTurn = new Audio ("sound/click.WAV");
let gameover = new Audio ("sound/gameover.WAV");
let isgameover = false;

let turn="X";

// function to Change the Turn
const changeTurn =()=>{
    return turn === "X" ? "0": "X"
};

// Function  to Check for a Win

const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2 , 3, 6.5, 0],
        [3,4,5 , 4, 19.5, 0],
        [6,7,8 , 4, 32.5, 0],
        [0,3,6, -10.5, 19, 90],
        [1,4,7, 2.3, 19, 90],
        [2,5,8, 15.5, 19, 90],
        [0,4,8, 2.5, 19.5, 45],
        [2,4,6, 2, 19.5, 135],               
  ]   
  wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
          document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Congratulation! You have Won the Game"
          isgameover = true
          document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '15rem'
          document.querySelector(".line").style.width="34vw"
          document.querySelector(".line").style.transform =`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
          gameover.play()
      }
  })    
};



// Game Logics
// music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        music.play();
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText ="Now Turn is for Mr. " + turn;
            }
        }
    })
})

// Add onclick listener to reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn ='X'
    isgameover= false
      document.querySelector(".line").style.width="0vw"
        document.getElementsByClassName("info")[0].innerText ="Now Turn is for Mr. " + turn;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '0px'
    
})


