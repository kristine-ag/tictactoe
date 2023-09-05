let btnRef = document.querySelectorAll(".grid");
let msgRef = document.getElementById("message");
let restartBtn = document.getElementById("restart");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
};

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    winChecker();
  });
});

const drawFunction = () => {
  alert("Draw");
};

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
  removeWinningLine(); line
});

const removeWinningLine = () => {
  btnRef.forEach((element) => {
    element.classList.remove("winning-element");
  });
  msgRef.innerHTML = "Goodluck!"; 
};

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        btnRef[element1,element2,element3]
        winFunction(element1, [i[0], i[1], i[2]]);
      }
    }
  }
};

const winFunction = (letter, winningElements) => {
  if (letter == "X") {
    msgRef.innerHTML = "X is the winner";
  } else {
    msgRef.innerHTML = "O is the winner";
  }
  
  winningElements.forEach((index) => {
    btnRef[index].classList.add("winning-element");
  });
};


