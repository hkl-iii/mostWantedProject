'use strict';


function processSearch(){
    let idInput = document.forms['nameForm']['id'].value;
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let genderInput= document.forms['nameForm']['gender'].value;
    let dobInput = document.forms['nameForm']['dob'].value;
    let heightInput = document.forms['nameForm']['height'].value;
    let weightInput = document.forms['nameForm']['weight'].value;
    let eyeColorInput = document.forms['nameForm']['eyes'].value;
    let jobInput = document.forms['nameForm']['job'].value;
    let parentsInput = document.forms['nameForm']['parents'].value;
    let spouseInput = document.forms['nameForm']['spouse'].value;


    console.log(dobInput);


    let filteredPeople = people;
    

    if(idInput != "")          filteredPeople=  searchById(filteredPeople);
    if(firstNameInput != "")   filteredPeople =  searchByFirstName(filteredPeople);
    if(lastNameInput != "")    filteredPeople =  searchByLastName(filteredPeople);
    if(genderInput != "")    filteredPeople =  searchByGender(filteredPeople);
    if(dobInput != "")    filteredPeople =  searchByDob(filteredPeople);
    if(heightInput != "")    filteredPeople =  searchByHeight(filteredPeople);
    if(weightInput != "")    filteredPeople =  searchByWeight(filteredPeople);
    if(eyeColorInput != "")    filteredPeople =  searchByEyeColor(filteredPeople);
    if(jobInput != "")    filteredPeople =  searchByJob(filteredPeople);
    if(parentsInput != "")    filteredPeople =  searchByParents(filteredPeople);
    if(spouseInput != "")    filteredPeople =  searchBySpouse(filteredPeople);



    if(filteredPeople.length > 0){ 
        populateTable(filteredPeople);		
        showFilteredTable(filteredPeople);
    }else{
        clearTable();
        alert('Sorry, looks like there is no one who matches that criteria.');
    }

}

function searchById(peopleData){
    let idInput = document.forms['nameForm']['id'].value;
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.id == idInput){
            return true;
        }
            return false;            
        });
        return filteredPeople;
}
/*
function searchByName(){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    


    
    let filteredPeople = people.filter(function (person) {
        if(person.firstName.toLowerCase() == firstNameInput.toLowerCase() && person.lastName.toLowerCase() === lastNameInput.toLowerCase()){
            return true;
        }
            return false;		           
    });
    
    if(filteredPeople.length > 0){
        populateTable(filteredPeople);
        console.log(filteredPeople);
		showFilteredTable();
    }else{
        alert('Sorry, looks like there is no one who matches that criteria.');
    }
}

*/

function searchByFirstName(peopleData){
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.firstName.toLowerCase() == firstNameInput.toLowerCase()){
            return true;
        }
            return false;            
    });
        
    return filteredPeople;
}

function searchByLastName(peopleData){    
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.lastName.toLowerCase() == lastNameInput.toLowerCase()){
            return true;
        }
            return false;            
        });

        return filteredPeople;

}


function searchByGender(peopleData) {
    let genderInput= document.forms['nameForm']['gender'].value;
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.gender.toLowerCase() == genderInput.toLowerCase()){
            return true;
        }
            return false;            
        });
        return filteredPeople;
}

function convertDate(date){
  var datearray = date.split("-");
  var newdate = datearray[1] + '/' + datearray[2] + '/' + datearray[0];
  return newdate;
  
}

function searchByDob(peopleData){
    let dobInput = document.forms['nameForm']['dob'].value;
	dobInput = convertDate(dobInput);
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.dob == dobInput){
            return true;
        }
            return false;            
        });
        return filteredPeople;
}



function searchByHeight(peopleData){
    let heightInput = document.forms['nameForm']['height'].value;
    let filteredPeople = peopleData.filter(function (peopleData) {
        if(peopleData.height == heightInput){
            return true;
        }
            return false;            
        });

        return filteredPeople;
}


function searchByWeight(peopleData){
	let weightInput = document.forms['nameForm']['weight'].value;

	let filteredPeople = peopleData.filter(function(peopleData){
		if(peopleData.weight == weightInput){
			return true;
		}else{
			return false;
		}
	})
    return filteredPeople;
} 


function searchByEyeColor(peopleData){
	let eyeColorInput = document.forms['nameForm']['eyes'].value;

	let filteredPeople = peopleData.filter(function(peopleData){
		if(peopleData.eyeColor.toLowerCase() == eyeColorInput.toLowerCase()){
			return true;
		}else{
			return false;
		}
	})
    return filteredPeople;
}

function searchByJob(peopleData){
	let jobInput = document.forms['nameForm']['job'].value;

	let filteredPeople = peopleData.filter(function(peopleData){
		if(peopleData.occupation.toLowerCase() == jobInput.toLowerCase()){
			return true;
		}else{
			return false;
		}
	})
    return filteredPeople;
}

function searchByParents(peopleData){
	let parentsInput = document.forms['nameForm']['parents'].value;

	let filteredPeople = peopleData.filter(function(peopleData){
		if(peopleData.parents.toLowerCase() == parentsInput.toLowerCase()){
			return true;
		}else{
			return false;
		}
	})
    return filteredPeople;
}

function searchBySpouse(peopleData){
	let spouseInput = document.forms['nameForm']['spouse'].value;

	let filteredPeople = peopleData.filter(function(peopleData){
		if(peopleData.spouse.toLowerCase() == spouseInput.toLowerCase()){
			return true;
		}else{
			return false;
		}
	})
    return filteredPeople;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function populateTable(people){
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
document.getElementById("table").style.display = "none";

removeAllChildNodes(myTable);

let headers = ['ID', 'First Name', 'Last Name', 'Gender', 'DOB', 'Height', 'Weight', 
'EyeColor', 'Occupation', 'Parents', 'Current Spouse','Action Button'];

 
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
        
        let cell = document.createElement('td');
      
        cell.innerHTML = " <button onclick='viewOnlyThisRecord("+ppl.id+")'>View Only This Record</button>"
        row.appendChild(cell);

		table.appendChild(row);
	});

	    myTable.appendChild(table);
        
}

//populateTable(people);


function showAllDataTable(){
    clearTable();
    populateTable(people);


	let btnGet = document.getElementById('showBtn');
	let myTable = document.querySelector('#table');
    document.getElementById("table").style.display = "block";	



}


function showFilteredTable(filteredPeople){

    clearTable();
    populateTable(filteredPeople);
	let btnGet = document.getElementById('showBtn');
	let myTable = document.querySelector('#table');
    document.getElementById("table").style.display = "block";	



}

function clearTable(){
    document.getElementById("nameForm").reset();


	let btnGet = document.getElementById('clearBtn');
	let myTable = document.querySelector('#table');
	document.getElementById('table').style.display = "none";
	

}



function viewOnlyThisRecord(id){
    
    let filteredPeople = people.filter(function (people) {
        if(people.id == id){
            return true;
        }
            return false;            
        });

        showFilteredTable(filteredPeople);
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






	

