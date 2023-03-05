'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
console.log(message);

function onLoad() {
	defineHeading1();
	defineHeading2();
	getNbDays();
}

// function defineHeading1() qui définit le contenu de la balise h1
function defineHeading1() {
	let heading1 = document.getElementById('title');
	heading1.innerHTML = 'TD1';
}

// function defineHeading2() qui définit le contenu de la balise h2
function defineHeading2(){
	let heading2 = document.getElementById('title2');
	heading2.innerHTML = 'Exo 2';
}

// function countHeading() qui compte le nombre de balises h2
function countHeading() {
	const h2 = document.getElementsByTagName('h2');
	const h2Length = h2.length;
	alert('Il y a ' + h2Length + ' balises h2 dans le document.');
}

// function defineHeading4() qui change le contenu de la première ou de la dernière balise de classe firstOrLast
function defineHeading4() {
	let heading4 = document.getElementsByClassName('firstOrLast');
	if (heading4.length % 2 === 0) {
		heading4[0].innerHTML = 'First Or Last ?';
	} else {
		heading4[heading4.length - 1].innerHTML = 'Exo 4';
	}
}

// function swapInnerHTML() qui échange le contenu des balises div1 et div2
function swapInnerHTML() {
	let div1 = document.getElementById('div1');
	let div2 = document.getElementById('div2');
	let div1Content = div1.innerHTML;
	div1.innerHTML = div2.innerHTML;
	div2.innerHTML = div1Content;
}

// function dateAlter() qui affiche la date de dernière modification du document
function dateAlter() {
	const lastModified = new Date(document.lastModified);
	const date = lastModified.toLocaleDateString();
	const author = document.querySelector("meta[name='author']").getAttribute("content");
	document.querySelector("#update-date").innerHTML = "Dernière modification : " + date + " par " + author;
}

// function getNbDays() qui calcule le nombre de jours restants avant le 19 juillet
function getNbDays() {
	const today = new Date();
	const targetDate = new Date(today.getFullYear(), 6, 19);
	if (targetDate < today) {
		targetDate.setFullYear(targetDate.getFullYear() + 1);
	}
	const nbDays = Math.round((targetDate - today) / (1000 * 60 * 60 * 24));
	document.querySelector("#nb-days").innerHTML = "il reste " + nbDays + " jour" + (nbDays > 1 ? "s" : "") + " avant le 19 juillet " + targetDate.getFullYear();
}

window.onload = function() {
	dateAlter();
	getNbDays();
	document.querySelector("#nb-days").addEventListener("click", getNbDays);
	updateClock2();
}

// function updateClock1() qui affiche l'heure courante dans la balise div id="clock"
function updateClock1() {
	const clock = document.getElementById("clock");
	setInterval(function() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		clock.innerHTML = hours + ":" + minutes + ":" + seconds;
	}, 1000);
}

document.addEventListener('load', updateClock1);

// function updateClock2() qui affiche l'heure courante dans la balise div id="clock"
function updateClock2() {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();
	const clock = document.getElementById("clock");
	clock.innerHTML =
		(hours < 10 ? "0" + hours : hours) +
		":" +
		(minutes < 10 ? "0" + minutes : minutes) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds);
	setTimeout(function() {
		updateClock2();
	}, 1000);
}

document.addEventListener('load', updateClock2);

// function updateGraphicClock() qui affiche l'heure courante dans la balise div id="clock" grâce à des images
function updateGraphicClock() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const clockDiv = document.getElementById("clock-graphic");

	clockDiv.innerHTML = "";

	const hour1 = Math.floor(hours / 10);
	const hour2 = hours % 10;
	const minute1 = Math.floor(minutes / 10);
	const minute2 = minutes % 10;
	const second1 = Math.floor(seconds / 10);
	const second2 = seconds % 10;

	clockDiv.innerHTML += "<img src='assets/images/" + hour1 + ".gif' />";
	clockDiv.innerHTML += "<img src='assets/images/" + hour2 + ".gif' />";
	clockDiv.innerHTML += "<img src='assets/images/minus.gif' />";
	clockDiv.innerHTML += "<img src='assets/images/" + minute1 + ".gif' />";
	clockDiv.innerHTML += "<img src='assets/images/" + minute2 + ".gif' />";
	clockDiv.innerHTML += "<img src='assets/images/minus.gif' />";
	clockDiv.innerHTML += "<img src='assets/images/" + second1 + ".gif' />";
	clockDiv.innerHTML += "<img src='assets/images/" + second2 + ".gif' />";
}

setInterval(updateGraphicClock, 1000);

const input = document.getElementById("inputNumber");

input.addEventListener("input", function() {
	if (isNaN(input.value)) {
		input.classList.remove("green");
		input.classList.add("red");
	} else if(input.value === "") {
		input.classList.remove("red");
		input.classList.remove("green");
		input.classList.add("white");
	} else {
		input.classList.remove("red");
		input.classList.add("green");
	}
});

const asideEls = document.querySelectorAll('aside');


asideEls.forEach((asideEl) => {
	const h2El = asideEl.querySelector('h2');
	h2El.classList.add('menu-item');

	const contentEl = asideEl.querySelector('div');
	contentEl.classList.add('menu-content');

	const iconEl = h2El.querySelector('.icon');
	iconEl.innerHTML = '<img src="../assets/images/plus.gif" alt="plus" />';
	iconEl.classList.add('menu-icon');

	h2El.addEventListener('click', () => {
		contentEl.classList.toggle('hide');
		iconEl.innerHTML = contentEl.classList.contains('hide') ? '<img src="../assets/images/plus.gif" alt="plus" />' : '<img src="../assets/images/minus.gif" alt="moins" />';

	});
});

function search() {
	var searchText = document.getElementById("searchText").value.trim();

	if (searchText.length == 0) {
		return;
	}

	var body = document.getElementsByTagName("body")[0];
	var elementsToHighlight = searchForText(body, searchText);

	if (!window.pageSaved) {
		window.pageSaved = body.cloneNode(true);
	}

	// Restauration de la page
	var pageToRestore = window.pageSaved.cloneNode(true);
	body.parentNode.replaceChild(pageToRestore, body);

	// Surlignage des éléments trouvés
	for (var i = 0; i < elementsToHighlight.length; i++) {
		var span = document.createElement("span");
		span.className = "select";
		span.style.backgroundColor = "yellow";
		var node = document.createTextNode(searchText);
		span.appendChild(node);
		elementsToHighlight[i].parentNode.replaceChild(span, elementsToHighlight[i]);
	}
}

function searchForText(element, searchText) {
	var elementsToHighlight = [];
	for (var i = 0; i < element.childNodes.length; i++) {
		var node = element.childNodes[i];
		if (node.nodeType == Node.TEXT_NODE) {
			var text = node.nodeValue.trim();
			var index = text.indexOf(searchText);
			if (index != -1) {
				var before = text.substring(0, index);
				var after = text.substring(index + searchText.length);
				var spanBefore = document.createTextNode(before);
				var spanAfter = document.createTextNode(after);
				var span = document.createElement("span");
				span.className = "select";
				span.style.backgroundColor = "yellow";
				var spanMiddle = document.createTextNode(searchText);
				span.appendChild(spanMiddle);
				if (before.length > 0) {
					elementsToHighlight.push(spanBefore);
				}
				elementsToHighlight.push(span);
				if (after.length > 0) {
					elementsToHighlight.push(spanAfter);
				}
			}
		} else if (node.nodeType == Node.ELEMENT_NODE) {
			var childElementsToHighlight = searchForText(node, searchText);
			for (var j = 0; j < childElementsToHighlight.length; j++) {
				elementsToHighlight.push(childElementsToHighlight[j]);
			}
		}
	}
	return elementsToHighlight;
}

function interactiveSearch() {
	const searchText = document.getElementById("interactive-search-text").value;

	if (searchText === "") {
		removeSelection();
	}

	const pageElements = document.getElementsByTagName("p");
	for (let i = 0; i < pageElements.length; i++) {
		const element = pageElements[i];

		if (element.id !== "interactive-search-text" && element.tagName !== "SCRIPT") {
			const elementText = element.textContent || element.innerText;

			if (elementText.indexOf(searchText) !== -1) {
				const re = new RegExp(searchText, "gi");
				element.innerHTML = element.innerHTML.replace(re, (match) => `<span class="select">${match}</span>`);
			}
		}
	}
}

function removeSelection() {
	const selectElements = document.querySelectorAll('.select');
	selectElements.forEach((selectElement) => {
		const textNode = document.createTextNode(selectElement.textContent);
		selectElement.parentNode.replaceChild(textNode, selectElement);
	});
}
