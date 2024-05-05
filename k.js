import { currentPlayer } from "./script.js";
const FirstPName = document.getElementById("FirstPName");
const SecondPName = document.getElementById("SecondPName");
let playerOne = document.querySelector(".playerss");
let playerTwo = document.querySelector(".playerss1");
let info = document.querySelector(".info");

export let currentValue = "";
FirstPName.addEventListener("change", (event) => {
	let value = event.target.value;

	playerOne.innerHTML = ` ${value} [ ${currentPlayer} ]`;
	currentValue = value;
});

SecondPName.addEventListener("change", (event) => {
	let value = event.target.value;
	playerTwo.innerHTML = ` ${value}  [ O ]`;
});
