'use strict';


function processSearch(){
	document.getElementById("Title").innerHTML = "";

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
'EyeColor', 'Occupation', 'Parents', 'Current Spouse','Action Buttons'];

 
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
      
        cell.innerHTML = " <button style='background:lightblue;' onclick='viewSingleRecord("+ppl.id+")'>View Single Record</button> <button style='background:lightgreen;' onclick='viewDesendents("+ppl.id+")'>View Desendents</button>  <button style='background:lightpink;'onclick='viewFamilyMembers("+ppl.id+")'>View Family Members</button>"
        row.appendChild(cell);

		table.appendChild(row);
	});

	    myTable.appendChild(table);
        
}

//populateTable(people);


function getDesendents(id){	
	let spouseID ;
	
    let filteredPeople = people.filter(function (people) {
        if(people.id == id){
            return true;	
        }
            return false;            
        });
		
	 spouseID = filteredPeople[0].currentSpouse;
		
		
	filteredPeople = people.filter(function (people) {
		/*
	      if(spouseID!=null){	
             if(people.parents[0] == id || people.parents[0] == spouseID || people.parents[1] == id || people.parents[1] == spouseID){	
                return true;	
             }
	       }
		   else{ */
			  if(people.parents[0] == id || people.parents[1] == id){	
                return true;	
              }
		  // }
            return false;            
        });
		
	console.log(id);
	console.log(spouseID);
	console.log(filteredPeople);

	
	return filteredPeople;
}

function getFullNameById(id){
	let fullName;
	
	let filteredPeople = people.filter(function (people) {
        if(people.id == id){
            return true;
        }
            return false;            
    });
	
	fullName = filteredPeople[0].firstName + " " + filteredPeople[0].lastName;
	
	
	return fullName;
}



function getParentsById(id){
	let parents=Array();
	
	let filteredPeople = people.filter(function (people) {
        if(people.id == id){
            return true;
        }
            return false;            
    });
	
	parents = filteredPeople[0].parents;
	
	
	return parents;
}


function viewDesendents(id){
	
   document.getElementById("Title").innerHTML = "<h1 style='background:orange'>Desendents of "+getFullNameById(id)+" [ID# "+id+"]</h1>";
   
   let filteredPeople  =	getDesendents(id);
   
   showFilteredTable(filteredPeople);
   
   
}






function viewFamilyMembers(id){
	
   document.getElementById("Title").innerHTML = "<h1 style='background:orange'>Family Members of "+getFullNameById(id)+" [ID# "+id+"]</h1>";
   let  memberID = Array();
   let  memberName = Array();
   let  relation = Array();
   
   
     let filteredPeople = people.filter(function (people) {
        if(people.id == id){
			if(people.parents.length==1)
			{	
			   memberID.push(people.parents[0]);
			   memberName.push(getFullNameById(people.parents[0]));
			   relation.push("Parent");
			}
			if(people.parents.length==2)
			{	
			   memberID.push(people.parents[0]);
			   memberName.push(getFullNameById(people.parents[0]));
			   relation.push("Parent");
			   
			   memberID.push(people.parents[1]);
			   memberName.push(getFullNameById(people.parents[1]));
			   relation.push("Parent");
			}
			
            return true;	
        }
            return false;            
    }); 
   
   

   filteredPeople = people.filter(function (people) {
        if(people.currentSpouse == id){
			memberID.push(people.id);
			memberName.push(people.firstName+" "+people.lastName);
			relation.push("Spouse");
			
            return true;	
        }
            return false;            
    });
	
	
    filteredPeople = people.filter(function (people) {
        if(people.parents[0] == id || people.parents[1] == id  ){
			memberID.push(people.id);
			memberName.push(people.firstName+" "+people.lastName);
			relation.push("Children");
			
            return true;	
        }
            return false;            
    });
		
	
	let parents = getParentsById(id);

	
    filteredPeople = people.filter(function (people) {
		
		if( (people.id!=id) &&(people.parents!="") && (people.parents[0] == parents[0]) &&  (people.parents[1] == parents[1])){	
			memberID.push(people.id);
			memberName.push(people.firstName+" "+people.lastName);
			relation.push("Siblings");
		   
            return true;	
        }
            return false;            
    });
		
    console.log(filteredPeople);		

    console.log(memberID);
    console.log(memberName);
    console.log(relation);
    

	
   let rows= "";
   let i=0;

   for(i=0;i<memberID.length; i++)
   {
	   
	   rows += `
	        <tr>
			    <td>${memberID[i]}</td> <td>${memberName[i]}</td>  <td>${relation[i]}</td>
			</tr>
	   `;
	   
   }
		     
	
	
	
   let familyTable=`
   
   

   <table width='100%'  border='1px'>
	       <tr style="background:blue;color:white"> 
		       <th>ID</th>
			   <th>Name</th>
			   <th>Relation</th>
		   
		   </tr>
		   
		   ${rows};
	   
	   </table>
`;


	document.getElementById("table").innerHTML = familyTable;
	
}


function showAllDataTable(){
    clearTable();
	document.getElementById("Title").innerHTML = "";

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
    //document.getElementById("Title").innerHTML = "";

	let btnGet = document.getElementById('clearBtn');
	let myTable = document.querySelector('#table');
	document.getElementById('table').style.display = "none";
	

}



function viewSingleRecord(id){
    
    let filteredPeople = people.filter(function (people) {
        if(people.id == id){
            return true;
        }
            return false;            
        });

        showFilteredTable(filteredPeople);
}




	

