let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container")
let newBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector(".reset-btn")
let msg = document.querySelector("#msg")
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

]

let count = 0
boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            box.style.color = "#d83f31"
            turnO = false;
        } else {
            box.innerHTML = "X"
            box.style.color = "#E9B824"
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
        count++
        console.log("count = ", count)
        if (count == 9) {
            drawGame()
        }



    });


});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

// RESET GAME
const resetGame = () => {
    turnO = true
    count = 0

    enableBoxes()
    msgContainer.classList.add("hide")
}

// DRAW GAME
const drawGame = () => {
    msg.innerText = "Match drawn"
    msgContainer.classList.remove("hide")
}


const checkWinner = () => {
    for (let pattern of winPattern) {
        pos1Val = boxes[pattern[0]].innerText
        pos2Val = boxes[pattern[1]].innerText
        pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val)
                showWinner(pos1Val)
            }
        }
    }
}

// DISABLING BOX AFTER GAME

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true
    }
}

// ENABLING
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)

