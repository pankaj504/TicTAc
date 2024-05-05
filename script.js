export let winnerShow = document.querySelector(".winnerShow");
let btn = document.querySelector(".btn");
export let greet = document.querySelector(".greet");
export let currentPlayer = "X";

let main_container = document.querySelectorAll(".game-row");
let btn_newGame = document.querySelector("#btn-2");
const Board = ["", "", "", "", "", "", "", "", ""];
let start = document.querySelector(".start");
let cell = document.querySelectorAll(".column");
let info = document.querySelector(".info");
let playerss = document.querySelector(".playerss");
let playerss1 = document.querySelector(".playerss1");
let player = document.querySelectorAll(".Players");

start.addEventListener("click", () => {
	// Check if both input fields have values
	const firstPlayerName = document.getElementById("FirstPName").value.trim();
	const secondPlayerName = document.getElementById("SecondPName").value.trim();
	
	if (firstPlayerName !== "" && secondPlayerName !== "") {
			main_container.forEach((container) => {
					container.style.display = "inline";
					info.style.display = "none";
					start.style.display = "none";
					btn_newGame.style.display = "none";
					btn.style.display = "inline";
					playerss.style.position = "relative";
					playerss1.style.position = "inherit";
			});
			// console.log("Start Game");
	} else {
			// Display a message or take appropriate action if any of the input fields is empty
			alert("Please enter names for both players.");
	}
});


cell.forEach((elements) => {
	elements.addEventListener("click", (cells) => {
		const clickedCell = cells.target;

		const cellId = parseInt(clickedCell.id.replace("c-", "") - 1);
		console.log("cellId:", cellId);

		if (Board[cellId] !== "") {
			console.log("Already filled");
			return;
		}

		Board[cellId] = currentPlayer;
		clickedCell.innerText = currentPlayer;
		

		player.forEach((plyr) => {
			if (currentPlayer == "X") {
				console.log("player 1:", plyr.children[0].innerText);
				playerss.style.position = "inherit";
				playerss1.style.position = "relative";
			} else {
				console.log("player 2:", plyr.children[1].innerText);
				playerss1.style.position = "inherit";
				playerss.style.position = "relative";
			}
		});
		if (currentPlayer === "X") {
			clickedCell.style.color = "#ff4b1f";
	} else if (currentPlayer === "O") {
			clickedCell.style.color = "white";
	}
		Winner();
	
		currentPlayer = currentPlayer === "X" ? "O" : "X";
		
	});
});

const WinPatterns = [
	[
		[0, 1, 2], // Top row
		[3, 4, 5], // Middle row
		[6, 7, 8], // Bottom row
		[0, 3, 6], // Left column
		[1, 4, 7], // Middle column
		[2, 5, 8], // Right column
		[0, 4, 8], // Left-to-right diagonal
		[2, 4, 6],
	],
];

const Winner = () => {
	for (let i = 0; i < WinPatterns.length; i++) {
		const pattern = WinPatterns[i];
		for (let j = 0; j < pattern.length; j++) {
			const [a, b, c] = pattern[j];
			const A = Board[a];
			const B = Board[b];
			const C = Board[c];
			if (Board[a] && Board[a] === Board[b] && Board[b] === Board[c]) {
				console.log("A:", A);
				console.log("B:", B);
				console.log("C:", C);
				console.log(`Winner is ${currentPlayer}`);

				playerss.addEventListener("click", (e) => {
					const playerName = e.target.innerText;
				});
				playerss1.addEventListener("click", (e) => {
					const playerName1 = e.target.innerText;
				});


				
				greet.innerText = ` Congratulation ! Winner is ${currentPlayer}`;

				greet.style.display = "flex";
				winnerShow.style.display = "flex";
				btn.style.display = "none";
				btn_newGame.style.display = "block";
				return currentPlayer;
			}
			if (!Board.some((value) => value === "")) {
				greet.innerText = ` Match Draw Play Again`;
				greet.style.display = "flex";
				winnerShow.style.display = "flex";
				btn.style.display = "none";
				btn_newGame.style.display = "block";
				console.log("draw");
			}
		}
	}
	if (!Board.some((value) => value === "")) {
		console.log("Draw");
		return "draw";
	}

	return;
};

btn.addEventListener("click", () => {
	cell.forEach((cell) => {
		cell.innerText = "";
		winnerShow.style.display = "none";
		Board.fill("");
		currentPlayer = "X";
	});
});

btn_newGame.addEventListener("click", () => {
	cell.forEach((cell) => {
		cell.innerText = "";

		Board.fill("");
		winnerShow.style.display = "none";
		btn.style.display = "inline";
		btn_newGame.style.display = "none";
		currentPlayer = "X";
		playerss.style.position = "relative";
		playerss1.style.position = "inherit";
	});
});



window.addEventListener('resize', () => {
	const width = window.innerWidth;
	const height = window.innerHeight;

	const widthSpan = document.getElementById('width');
	const heightSpan = document.getElementById('height');

	widthSpan.textContent = `Width: ${width}px`;
	heightSpan.textContent = `Height: ${height}px`;
});

// Initial call to set initial values
window.dispatchEvent(new Event('resize'));

