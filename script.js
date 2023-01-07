const cross="X";
const zero="O"
const win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cells= document.querySelectorAll("[data-cell]");
const resultPage=document.querySelector("[data-result");
const text=document.querySelector(".text")

let turn= true;
gameStart()
function gameStart() {
    cells.forEach(cell=>{
        cell.addEventListener("click", makeMove,{once: true})
    });

}

function makeMove(e) {
    const move=e.target;
    const switcher=turn?cross:zero;
    placeMove(switcher,move);
    if (checkResult(switcher)) {
        updateWinner(switcher,false);
    } else if (draw()) {
        updateWinner(switcher,true)
    }
    else {
        playerTurn()
    }
}

function placeMove(switcher,move) {
    move.innerText=switcher;
}
function playerTurn() {
    turn = !turn;
}
function checkResult(switcher) {
    return win.some(combinations=>{
        return combinations.every(data=>{
            return cells[data].innerText===switcher;
    })
 })
}
function updateWinner(switcher,bool) {
    resultPage.classList.add("result");
    if(!bool){
        text.innerText=`${switcher} WIN!`;
    }
    if(bool) {
        text.innerText="DRAW";
    }
    fireReset();
}
function fireReset() {
    const resetButton=document.querySelector(".reset");
    resetButton.addEventListener("click",()=>{
        cells.forEach(cell=>{
            cell.innerText="";
            resultPage.classList.remove("result");
        })
    })
    gameStart();
}
function draw() {
    return [...cells].every(node=>{
        return node.innerText!=="";
        }
    )
}
