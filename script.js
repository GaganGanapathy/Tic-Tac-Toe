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
console.log(cells[2].innerText)
let turn= true;
gameStart()
function gameStart() {
    cells.forEach(cell=>{
        cell.addEventListener("click", makeMove,{once: true})
    });

}

function makeMove(e) {
    const move=e.target;
    console.log(move)
    const switcher=turn?cross:zero;
    placeMove(switcher,move);
    playerTurn();
    if (checkResult(switcher)) {
        updateWinner(switcher);
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
function updateWinner(switcher) {
    resultPage.classList.add("result");
    const status=document.querySelector(".text")
    status.innerText=`${switcher} WIN!`;
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