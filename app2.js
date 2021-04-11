"use strict";

let search_input = document.querySelector("#search_input");

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
