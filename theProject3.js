function searchAgain(callback){
    callback();
}

searchAgain(searchByName);


 
    <form>
<div class="controls">

    <label for="id">User ID:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Reset">
    <input type="submit" value="Submit">

</div>
</form>




function resetTable(reset){
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let clearTable = myTable.clear().draw();
let headers = ['id', 'firstName', 'lastName', 'gender', 'dob', 'height', 'weight', 
'eyeColor', 'occupation', 'parents', 'currentSpouse'];
}


<script type="text/javascript">
  function deleteTable(){
    document.getElementById('div_table').innerHTML="TABLE DELETED"
  }
</script>

<div id="div_table">

 <table id="toc" class="toc" border="1" summary="Contents">
 </table>
</div>
<input type="button" onClick="deleteTable()"></input>


myTable.innerHTML = "";

let rmTable = document.getElementById('table');
rmTable.remove();

