/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	//initSelect();
	initSelect2();
	insertElement();
	search();


}

//Exercice 1
function initSelect() {
	const rootElement = document.documentElement;

	rootElement.addEventListener('click', select);
	function select(event) {
		const clickedElement = event.target;

		if (clickedElement.style.backgroundColor === 'pink') {
			clickedElement.style.backgroundColor = '';
		}else if (clickedElement.style.backgroundColor === '') {
			clickedElement.style.backgroundColor = 'pink';
		} else{
			clickedElement.style.backgroundColor = 'red';
		}
	}
}
function select2(event) {
	const clickedElement = event.target;

	if (clickedElement.classList.contains('selected')) {
		return;
	}
	if (clickedElement.matches('div:first-of-type') || clickedElement.closest('div:first-of-type')) {
		return;
	}
	const selectedElements = document.querySelectorAll('.selected');
	for (let i = 0; i < selectedElements.length; i++) {
		selectedElements[i].classList.remove('selected');
	}
	clickedElement.classList.add('selected');
}

function initSelect2() {
	const rootElement = document.documentElement;

	rootElement.addEventListener('click', select2);
	const allElements = document.querySelectorAll('*');
	for (let i = 0; i < allElements.length; i++) {
		allElements[i].classList.add('selectable');
	}
	const styleElement = document.createElement('style');
	styleElement.innerHTML = '.selectable.selected { background-color: cyan; }';
	document.head.appendChild(styleElement);
}

function insertElement(target) {

	const selectElement = document.getElementById('insert-select');
	const textInputElement = document.getElementById('insert-text');

	const newElement = document.createElement(selectElement.value);
	newElement.textContent = textInputElement.value;

	target.parentNode.insertBefore(newElement, target);
}

function search() {
	const searchText = prompt('Entrez le texte à rechercher :');
	if (!searchText) {
		return;
	}

	const searchRegex = new RegExp(searchText, 'gi');
	const allElements = document.querySelectorAll('*');

	for (let i = 0; i < allElements.length; i++) {
		const element = allElements[i];

		if (element.nodeType === Node.TEXT_NODE && searchRegex.test(element.textContent)) {
			const parentElement = element.parentElement;

			// On crée un élément <mark> pour entourer le texte trouvé
			const markElement = document.createElement('mark');
			markElement.textContent = element.textContent.replace(searchRegex, '<mark>$&</mark>');
			markElement.style.backgroundColor = 'yellow';
			// On remplace l'élément texte par l'élément <mark>
			parentElement.insertBefore(markElement, element);
			parentElement.removeChild(element);
		}
	}
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
