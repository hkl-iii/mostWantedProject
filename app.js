'use strict';

function searchByName(){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
            return false;		           
    });
    
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}


function searchByWeight(){
	let eyeColorInput = document.forms['nameForm']['weight'].value;

	let filteredPeople = people.filter(function(person){
		if(person.weight == weightInput){
			return true;
		}else{
			return false;
		}
	})
}


function searchByEyeColor(){
	let eyeColorInput = document.forms['nameForm']['eyes'].value;

	let filteredPeople = people.filter(function(person){
		if(person.eyeColor == eyeColorInput){
			return true;
		}else{
			return false;
		}
	})
}

function searchByJob(){
	let eyeColorInput = document.forms['nameForm']['job'].value;

	let filteredPeople = people.filter(function(person){
		if(person.occupation == eyeColorInput){
			return true;
		}else{
			return false;
		}
	})
}

function searchByParents(){
	let eyeColorInput = document.forms['nameForm']['parents'].value;

	let filteredPeople = people.filter(function(person){
		if(person.parents == parentsInput){
			return true;
		}else{
			return false;
		}
	})
}

function searchBySpouse(){
	let eyeColorInput = document.forms['nameForm']['spouse'].value;

	let filteredPeople = people.filter(function(person){
		if(person.spouse == spouseInput){
			return true;
		}else{
			return false;
		}
	})
}
function populateTable(people){
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let headers = ['id', 'firstName', 'lastName', 'gender', 'dob', 'height', 'weight', 
'eyeColor', 'occupation', 'parents', 'currentSpouse'];

// TODO: Select just the table by id
// TODO:¨Write the entire array of people to the table

//new function below written by instructor.

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
}


function resetTable(){
	let btnGet = document.querySelector('button');
	let myTable = document.querySelector('#table');
	myTable.innerHTML = "";
	
	let headers = ['id', 'firstName', 'lastName', 'gender', 'dob', 'height', 'weight', 
	'eyeColor', 'occupation', 'parents', 'currentSpouse'];
	
	
	
	}


	
	

