'use strict';

function searchById(){
    let idInput = document.forms['nameForm']['id'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.id == idInput){
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

function searchByFirstName(){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput){
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

function searchByLastName(){    
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.lastName === lastNameInput){
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


function searchByGender() {
    let genderInput = document.forms['nameForm']['gender'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.gender === genderInput){
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

function searchByDob(){
    let dobInput = document.forms['nameForm']['dob'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.dob == dobInput){
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



function searchByHeight(){
    let heightInput = document.forms['nameForm']['height'].value;
    let filteredPeople = people.filter(function (person) {
        if(person.height == heightInput){
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
	let weightInput = document.forms['nameForm']['weight'].value;

	let filteredPeople = people.filter(function(person){
		if(person.weight == weightInput){
			return true;
		}else{
			return false;
		}
	})
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
} 


function searchByEyeColor(){
	let eyeColorInput = document.forms['nameForm']['eyes'].value;

	let filteredPeople = people.filter(function(person){
		if(person.eyeColor === eyeColorInput){
			return true;
		}else{
			return false;
		}
	})
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}

function searchByJob(){
	let jobInput = document.forms['nameForm']['job'].value;

	let filteredPeople = people.filter(function(person){
		if(person.occupation == jobInput){
			return true;
		}else{
			return false;
		}
	})
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}

function searchByParents(){
	let parentsInput = document.forms['nameForm']['parents'].value;

	let filteredPeople = people.filter(function(person){
		if(person.parents == parentsInput){
			return true;
		}else{
			return false;
		}
	})
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}

function searchBySpouse(){
	let spouseInput = document.forms['nameForm']['spouse'].value;

	let filteredPeople = people.filter(function(person){
		if(person.spouse == spouseInput){
			return true;
		}else{
			return false;
		}
	})
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}

function populateTable(people){
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
document.getElementById("table").style.display = "none"
let headers = ['ID', 'First Name', 'Last Name', 'Gender', 'DOB', 'Height', 'Weight', 
'EyeColor', 'Occupation', 'Parents', 'Current Spouse'];

 
	let table = document.createElement('table');
	let headerRow = document.createElement('tr');

	headers.forEach(headerText => {
		let header = document.createElement('th');
		let textNode = document.createTextNode(headerText);
		header.appendChild(textNode);
		headerRow.appendChild(header);
	});
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
        
}

populateTable(people);


function showTable(){
	let btnGet = document.getElementById('showBtn');
	let myTable = document.querySelector('#table');
    document.getElementById("table").style.display = "block";	
}
function clearTable(){
	let btnGet = document.getElementById('clearBtn');
	let myTable = document.querySelector('#table');
	document.getElementById("table").style.display = "none";
	
}



/*function buildTable(data) {

	let myTable = document.getElementById('table');
	for(let i = 0; i < data.length; i++) {

		let row = `<tr>		
		<td>${data[i].id} 
		<td>${data[i].fName}
		<td>${data[i].lastName}
		<td>${data[i].gender}
		<td>${data[i].dob} 
		<td>${data[i].height}  
		<td>${data[i].weight}
		<td>${data[i].eyeColor}
		<td>${data[i].occupation} 
		<td>${data[i].currentSpouse}
		</tr>`
		table.innerHTML += row;
	}
	buildTable(myTable);
}*/






	

