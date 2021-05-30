// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";



// ****** EVENT LISTENERS **********
form.addEventListener("submit",addItem);
clearBtn.addEventListener("click",clearListItem);
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    value = grocery.value;
    const id = new Date().getTime().toString();
    if(value !== "" && !editFlag){
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener("click",deleteItem);
        editBtn.addEventListener("click",editItem);
        list.appendChild(element);
        displayAlert("Item added to the list ", "success");
        container.classList.add("show-container");
        setBackToDefault();

    }else if (value !== "" && editFlag){
        editElement.innerHTML = value;
    displayAlert("value changed", "success");

   
    setBackToDefault();

    }else{
        displayAlert("hi" , "danger"); 
    }
}
//delete-item
function deleteItem(e){
   const del = e.currentTarget.parentElement.parentElement;
   list.removeChild(del);
   if(list.children.length === 0){
    container.classList.remove("show-container");
       }
       setBackToDefault();
}
//edit-item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
  }

 // display alert
 function displayAlert(text , action ){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    },1000)
}

// clearlist 
function clearListItem(){
   const items =  document.querySelectorAll(".grocery-item");
   if (items.length>0){
       items.forEach(function(item){
           list.removeChild(item);
       })
   }

   container.classList.remove("show-container");
   displayAlert("Empty list " , "danger");
   setBackToDefault();
}

function setBackToDefault(){
    grocery.value ="";
    editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
