'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
            return false;            
        });

    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}


let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let headers = ['id', 'firstName', 'lastName', 'gender', 'dob', 'height', 'weight', 
'eyeColor', 'occupation', 'parents', 'currentSpouse'];

btnGet.addEventListener('click', () => {
	let table = document.createElement('table');
	let headerRow = document.createElement('tr');

	headers.forEach(headerText => {
		let header = document.createElement('th');
		let textNode = document.createTextNode(headerText);
		header.appendChild(textNode);
		headerRow.appendChild(header);
	})
	table.appendChild(headerRow);
	people.forEach(ppl => {
		let row = document.createElement('tr');
		
		Object.values(ppl).forEach(text => {
			let cell = document.createElement('td');
			let textNode = document.createTextNode(text);
			cell.appendChild(textNode);
			row.appendChild(cell);
		});

		table.appendChild(row);
	});

	myTable.appendChild(table);
});
