//Add Todo List
showItems();
let addButton = document.getElementById("addBtn");
let addText = document.getElementById("addTxt");


/*
addButton.addEventListener("click", function () {
  let addText = document.getElementById("addTxt");
  let items = localStorage.getItem("items");
  if (items == null) {
    itemsObj = [];
  }
  else {
    itemsObj = JSON.parse(items);
  }
  itemsObj.push(addText.value);

  localStorage.setItem("items", JSON.stringify(itemsObj));
  addText.value = "";
  showItems();
});
*/
addButton.addEventListener("click", function (e) {
  let addText = document.getElementById("addTxt");
  
  if(addTxt.value!=0){
      let items = localStorage.getItem("items");
      if(items == null){
          itemsObj = [];
      }
      else{
          itemsObj = JSON.parse(items);
      }
      itemsObj.push(addTxt.value);
      
      localStorage.setItem("items", JSON.stringify(itemsObj));
      addText.value = '';
  }
  else{
    
    alert('You enter something');
  }
  showItems();
})


//function to add items

function showItems() {
  let items = localStorage.getItem("items")
  if (items == null) {
    itemsObj = [];
  }
  else {
    itemsObj = JSON.parse(items);
  }
  let html = "";

  itemsObj.forEach(function (element, index) {

    html += `
        <table class="table table-danger table-hover">
        <tbody>
        <tr>
        <td>
           <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
             <label class="label1"  id="label1"for="flexCheckDefault">${element}</label>
            </div>
           </td>
          <td class="float-right">
            <button class="btn btn-primary badge-pill" type="button"  id="${index}" onclick="editItems(this.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
           <button class="btn btn-danger badge-pill" type="button" id="${index}"onclick="deleteItems(this.id)" >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
           <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
           </svg>
          
         </button>
          </td>
        
        </tr>
      <tbody>
      </table> `;
  });

  let itemsElm = document.getElementById("items");
  if (itemsObj.length != 0) {
    itemsElm.innerHTML = html;
  }
  else {
    itemsElm.innerHTML = `<h4><b>Nothing to do</b></h4> `;
    itemsElm.style.color="#20c997";
  }

  
}





//Edit item
function editItems(index) {
  let saveindex = document.getElementById("saveindex");
  let addButton = document.getElementById("addBtn");
  let saveBtn = document.getElementById("savebtn");
  saveindex.value = index;
  let items = localStorage.getItem("items")
  itemsObj = JSON.parse(items);
  let addText = document.getElementById("addTxt");

  addText.value = itemsObj[index];

  addButton.style.display = "none";
  saveBtn.style.display = "block";

  
}


//save item
let saveBtn = document.getElementById("savebtn");
saveBtn.addEventListener("click", function () {
  let addButton = document.getElementById("addBtn");
  let items = localStorage.getItem("items")
  itemsObj = JSON.parse(items);
  let saveindex = document.getElementById("saveindex").value;
  itemsObj[saveindex] = addText.value;
  saveBtn.style.display = "none";
  addButton.style.display = "block";
  localStorage.setItem("items", JSON.stringify(itemsObj));
  addText.value = '';
  showItems();
})

//Function to delete a item
function deleteItems(index) {
  let saveBtn = document.getElementById("savebtn");
  let addButton = document.getElementById("addBtn");

  let items = localStorage.getItem("items");
  if (items == null) {
    itemsObj = [];
  } else {
    itemsObj = JSON.parse(items);
  }

  itemsObj.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsObj));
  saveBtn.style.display = "none";
  addButton.style.display = "block";
  addText.value = '';
  
  showItems();
}
function clearStorage() {
  let saveBtn = document.getElementById("savebtn");
  let addButton = document.getElementById("addBtn");

  if (confirm("Do you really want to clear?")) {
    console.log('Clearing the storage')
    localStorage.clear();
    saveBtn.style.display = "none";
    addButton.style.display = "block";
    addText.value = '';
        showItems();
  }
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let itemsList = document.querySelectorAll('tr');
  Array.from(itemsList).forEach(function (element) {
    let ListTxt = element.getElementsByTagName("td")[0].innerText;
    let searchList = search.value;
    let re = new RegExp(searchList, 'gi');
    if(ListTxt.match(re)){
        element.style.display="table-row";
    }
    else{
        element.style.display="none";
    }

  });
});




$(document).ready(function(){
 /*$('.btn').click(function(){
     // $('#searchTxt').toggle();
     $("#searchTxt").show();
    */
  
    $("#searchTxt").hide();
    $('#btn1').click(function(e){
      e.preventDefault();
     $("#searchTxt").toggle();
    });  
  
  
  $('#savebtn').click(function(){
  
  $("table").css("background", "lightgreen");
  });
  
  $('#addBtn').click(function(){
   $("table").css("background", "lightblue");
   
  });


    $('h1').click(function(){
     //console.log("clicked on h1");
     $('h1').css('color','red');
   $(this).css("background-color", "blue");   
    });    
  

  });
  

