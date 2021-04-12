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




// THIS BELLOW IS SEARCH BOX FILTERED TABLE HTML, JS, CSS
// HTML 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Filter the table using Search Box</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>


<div class="wrapper">
  <div class="header">
    <div class="title">
      Person Tracker
    </div>

    <div class="search_box">
      <input type="text" id="search_input" placeholder="Fliter Table Using Names">
    </div>
  </div>

  <div class="table_wrap">
    <div class="table_header">
      <ul>
        <li>
          <div class="item">
            <div class="id">
            <span>ID NUMBER</span>
            </div>
            <div class="name">
              <span>NAME</span>
            </div>
            <div class="gender">
              <span>GENDER</span>
            </div>
            <div class="dob">
              <span>DOB</span>
            </div>
            <div class="height">
              <span>HEIGHT</span>
            </div>
            </div>
            <div class="weight">
              <span>WEIGHT</span>
            </div>
            <div class="eyeColor">
              <span>EYE COLOR</span>
            </div>
            <div class="occupation">
              <span>OCCUPATION</span>
            </div>
            <div class="parents">
              <span>PARENTS</span>
            </div>
            <div class="currentSpouses">
              <span>CURRENT SPOUSES</span>
            </div>

        </li>
      </ul>
    </div>
    
    <div class="table_body">
      <ul>
        <li>
          <div class="item">
            <div class="id">
              <span>272822514</span>
            </div>
            <div class="name">
              <span>Billy Bob</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>1/18/1949</span>
            </div>
            <div class="height">
              <span>71</span>
            </div>
            <div class="weight">
              <span>175</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>programmer</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>401222887</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>401222887</span>
            </div>
            <div class="name">
              <span>Uma Bob</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>4/1/1947</span>
            </div>
            <div class="height">
              <span>65</span>
            </div>
            <div class="weight">
              <span>162</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>assistant</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>272822514</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>409574486</span>
            </div>
            <div class="name">
              <span>Michael Walkens</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>5/9/1951</span>
            </div>
            <div class="height">
              <span>76</span>
            </div>
            <div class="weight">
              <span>250</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>landscaper</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>260451248</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>260451248</span>
            </div>
            <div class="name">
              <span>Jon Walkens</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>9/6/1945</span>
            </div>
            <div class="height">
              <span>62</span>
            </div>
            <div class="weight">
              <span>115</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>assistant</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>409574486</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>629807187</span>
            </div>
            <div class="name">
              <span>Jack Pafoy</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>3/16/1938</span>
            </div>
            <div class="height">
              <span>70</span>
            </div>
            <div class="weight">
              <span>207</span>
            </div>
            <div class="eyeColor">
              <span>black</span>
            </div>
            <div class="occupation">
              <span>nurse</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>464142841</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>464142841</span>
            </div>
            <div class="name">
              <span>Jen	Pafoy</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>4/10/1940</span>
            </div>
            <div class="height">
              <span>72</span>
            </div>
            <div class="weight">
              <span>256</span>
            </div>
            <div class="eyeColor">
              <span>black</span>
            </div>
            <div class="occupation">
              <span>student</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>629807187</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>982411429</span>
            </div>
            <div class="name">
              <span>Mister Potatoo</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>12/18/1952</span>
            </div>
            <div class="height">
              <span>66</span>
            </div>
            <div class="weight">
              <span>170</span>
            </div>
            <div class="eyeColor">
              <span>hazel</span>
            </div>
            <div class="occupation">
              <span>architect</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>595767575</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>595767575</span>
            </div>
            <div class="name">
              <span>Missuz Potatoo</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>10/28/1948</span>
            </div>
            <div class="height">
              <span>59</span>
            </div>
            <div class="weight">
              <span>137</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>architect</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>982411429</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>693243224</span>
            </div>
            <div class="name">
              <span>Joy	Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>4/20/1939</span>
            </div>
            <div class="height">
              <span>69</span>
            </div>
            <div class="weight">
              <span>199</span>
            </div>
            <div class="eyeColor">
              <span>hazel</span>
            </div>
            <div class="occupation">
              <span>doctor</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>888201200</span>
            </div>
            <div class="name">
              <span>Mader Madden</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>5/6/1937</span>
            </div>
            <div class="height">
              <span>76</span>
            </div>
            <div class="weight">
              <span>205</span>
            </div>
            <div class="eyeColor">
              <span>black</span>
            </div>
            <div class="occupation">
              <span>landscaper</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>878013758</span>
            </div>
            <div class="name">
              <span>Jill Pafoy</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>2/8/1972</span>
            </div>
            <div class="height">
              <span>74</span>
            </div>
            <div class="weight">
              <span>118</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>programmer</span>
            </div>
            <div class="parents">
              <span>401222887</span>
            </div>
            <div class="currentSpouses">
              <span>294874671</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>951747547</span>
            </div>
            <div class="name">
              <span>Ralph Bob</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>12/23/1969</span>
            </div>
            <div class="height">
              <span>66</span>
            </div>
            <div class="weight">
              <span>179</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>nurse</span>
            </div>
            <div class="parents">
              <span>401222887</span>
            </div>
            <div class="currentSpouses">
              <span>159819275</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>159819275</span>
            </div>
            <div class="name">
              <span>Jasmine	Bob</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>12/18/1969</span>
            </div>
            <div class="height">
              <span>58</span>
            </div>
            <div class="weight">
              <span>156</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>assistant</span>
            </div>
            <div class="parents">
              <span>409574486,260451248</span>
            </div>
            <div class="currentSpouses">
              <span>951747547</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>348457184</span>
            </div>
            <div class="name">
              <span>Annie Pafoy</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>11/4/1970</span>
            </div>
            <div class="height">
              <span>62</span>
            </div>
            <div class="weight">
              <span>235</span>
            </div>
            <div class="eyeColor">
              <span>hazel</span>
            </div>
            <div class="occupation">
              <span>landscaper</span>
            </div>
            <div class="parents">
              <span>629807187,464142841</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>294874671</span>
            </div>
            <div class="name">
              <span>Dave Pafoy</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>8/5/1967</span>
            </div>
            <div class="height">
              <span>61</span>
            </div>
            <div class="weight">
              <span>112</span>
            </div>
            <div class="eyeColor">
              <span>green</span>
            </div>
            <div class="occupation">
              <span>doctor</span>
            </div>
            <div class="parents">
              <span>629807187,464142841</span>
            </div>
            <div class="currentSpouses">
              <span>878013758</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>931247228</span>
            </div>
            <div class="name">
              <span>Amii Pafoy</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>3/13/1963</span>
            </div>
            <div class="height">
              <span>74</span>
            </div>
            <div class="weight">
              <span>184</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>landscaper</span>
            </div>
            <div class="parents">
              <span>629807187,464142841</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>822843554</span>
            </div>
            <div class="name">
              <span>Regina Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>7/26/1959</span>
            </div>
            <div class="height">
              <span>71</span>
            </div>
            <div class="weight">
              <span>249</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>nurse</span>
            </div>
            <div class="parents">
              <span>693243224,888201200</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>819168108</span>
            </div>
            <div class="name">
              <span>Hana Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>10/7/1953</span>
            </div>
            <div class="height">
              <span>70</span>
            </div>
            <div class="weight">
              <span>187</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>politician</span>
            </div>
            <div class="parents">
              <span>693243224,888201200</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>969837479</span>
            </div>
            <div class="name">
              <span>Eloise Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>12/11/1961</span>
            </div>
            <div class="height">
              <span>63</span>
            </div>
            <div class="weight">
              <span>241</span>
            </div>
            <div class="eyeColor">
              <span>brown</span>
            </div>
            <div class="occupation">
              <span>assistant</span>
            </div>
            <div class="parents">
              <span>693243224,888201200</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>313207561</span>
            </div>
            <div class="name">
              <span>Mattias	Madden</span>
            </div>
            <div class="gender">
              <span>male</span>
            </div>
            <div class="dob">
              <span>2/19/1966</span>
            </div>
            <div class="height">
              <span>70</span>
            </div>
            <div class="weight">
              <span>110</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>assistant</span>
            </div>
            <div class="parents">
              <span>693243224,888201200</span>
            </div>
            <div class="currentSpouses">
              <span>313997561</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>313997561</span>
            </div>
            <div class="name">
              <span>Ellen Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>2/19/1970</span>
            </div>
            <div class="height">
              <span>67</span>
            </div>
            <div class="weight">
              <span>100</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>doctor</span>
            </div>
            <div class="parents">
              <span></span>
            </div>
            <div class="currentSpouses">
              <span>313207561</span>
            </div>
          </div>
        </li>

        <li>
          <div class="item">
            <div class="id">
              <span>313998000</span>
            </div>
            <div class="name">
              <span>Joey Madden</span>
            </div>
            <div class="gender">
              <span>female</span>
            </div>
            <div class="dob">
              <span>2/02/1987</span>
            </div>
            <div class="height">
              <span>67</span>
            </div>
            <div class="weight">
              <span>100</span>
            </div>
            <div class="eyeColor">
              <span>blue</span>
            </div>
            <div class="occupation">
              <span>doctor</span>
            </div>
            <div class="parents">
              <span>313207561,313997561</span>
            </div>
            <div class="currentSpouses">
              <span>null</span>
            </div>
          </div>
        </li>
        
        </ul>
    </div>
  </div>

<script src="app.js"></script>

</div>
</body>
</html>

// JS
var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  let span_items = document.querySelectorAll(".table_body .name span");
  let table_body = document.querySelector(".table_body ul");
  let search_item = e.target.value.toLowerCase();
 
 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("li").style.display = "block";
   }
   else{
     item.closest("li").style.display = "none";
     }
 })
  
});


//CSS

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #eaeaea;
}

.wrapper .header {
  background: #29a5d8;
}

.wrapper .title {
  padding: 50px 0;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
}

.wrapper .search_box {
  max-width: 1000px;
  background: #29a5d8;
  margin: 0 auto;
  padding: 25px 0 50px;
  border-radius: 3px;
}

.wrapper .search_box input {
  border: 0;
  border-bottom: 2px solid #e5edfa;
  width: 100%;
  outline: none;
  padding: 10px;
  background: transparent;
  color: #fff;
  font-size: 16px;
}

::placeholder {
  color: #e5edfa;
}

.wrapper .search_box input:focus {
  border-bottom: 2px solid #fff;
}

.table_wrap {
  width: 1000px;
  margin: 50px auto 0;
}

.table_wrap ul li .item {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px 0;
  height: 50px;
}

.table_wrap ul li .item .name,
.table_wrap ul li .item .phone {
  width: 20%;
  padding: 0 15px;
}

.table_wrap ul li .item .status {
  width: 15%;
  padding: 0 15px;
}

.table_wrap ul li .item .issue {
  width: 45%;
  padding: 0 15px;
}

.table_wrap ul li .item .issue span,
.table_wrap ul li .item .name span {
  width: 90%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.table_header ul li .item {
  border-bottom: 2px solid #eaeaea;
  font-weight: 600;
}

.table_body {
  height: 300px;
  overflow: auto;
}

.table_body ul li .item {
  border-bottom: 1px solid #efefef;
}

.table_body ul li .item .status span {
  padding: 5px 20px;
  border-radius: 25px;
  max-width: 115px;
  display: inline-block;
}

.table_body ul li .item .open {
  background: #e5edfa;
  color: #5a8ee4;
}

.table_body ul li .item .fixed {
  background: #cff1f0;
  color: #0dbeb6;
}

.table_body ul li .item .closed {
  background: #fedfe5;
  color: #ff89a0;
}

.table_body ul li .item .hold {
  background: #fff0db;
  color: #f59d39;
}

.table_body ul li .item .reopened {
  background: #d6f2ff;
  color: #29a5d8;
}

.table_body ul li .item .canceled {
  background: #ffdbd6;
  color: #e87060;
}