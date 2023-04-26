// var btn = document.querySelector(".add-task-btn");

// function clickAction() {
//     let modal = document.getElementById("modal");
//     modal.style.visibility = "visible";
//     let container = document.querySelector(".container").style.display="none";
    
// };
// let closebtn = document.getElementById("cross");
// function close(){
//     modal.display="none";
// }
// //taking values from the form


// function userData(){
//     console.log(id,taskName,priority,date,taskstatus);
// }
// userData();
// let count = 0;
// function addTask(){
//     preventDefault();
//     let dashboard = document.querySelector(".container");
//     dashboard.style.display = "flex";
//     id = count++;
//     let taskName = document.getElementById("TaskName").value;
// let priority = document.getElementById("priority").value;
// let date = document.getElementById("date").value;
// let taskstatus = document.getElementById("status").value;
//     userData();
//     console.log("execution complete");
// }

//================================================

const openModalBtn = document.querySelector(".add-task-btn");
const modal = document.querySelector("add-task-form");
const closeModal = document.querySelector("#cross");
const addTaskForm = document.getElementById("theform");

const myBtn = document.querySelector("#formbtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

myBtn.addEventListener("click", (event) => {
  // standard code to prevent your page from reloading
  event.preventDefault();

  const taskName = document.getElementById("task-name").value;
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("due-date").value;
  const status = document.getElementById("status").value;

  addTask(taskName, priority, dueDate, status);
  modal.style.display = "none";
});

function addTask(taskName, priority, dueDate, status) {
  console.log(status);
  if (status == "not-started") {
    // add it in the column of not started
    var list = document.getElementById("not-started");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
  } else if (status == "in-progress") {
    var list = document.getElementById("in-progress");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
    // add it in the column of in-progress
  } else if (status == "completed") {
    var list = document.getElementById("completed");
    list.innerHTML += `
                        <li>
                          <p>${taskName}</p>
                          <p>${priority}</p>
                          <p>${dueDate}</p>
                          <p>${status}</p>
                        </li>
                      `;
    // add it in the column of completed
  }

  // After successfully added ->

  // document.getElementById("task-name").value = "";
  // document.getElementById("priority").value = "";
  // document.getElementById("due-date").value = "";
  // document.getElementById("status").value = "";

  document.getElementById("theform").reset();
}




//==================================================



// // var myHeading = document.getElementById("heading2");

// // console.log(myHeading);
// // console.log(myHeading.parentElement.parentElement);
// // console.log(myHeading.previousElementSibling);
// // console.log(myHeading.nextElementSibling);

// // .cssText method is also useful

 
// //======================================================

// // how to make a button make things visible on click and invisible when clicked again.

// //  var open  = false;

// //  function changeStyles(){

// //     if(!open){
// //         open = true;
// //         document.getElementById("hamburger").style.display = "block";
// //     }
// //     else{
// //         open = false;
// //         document.getElementById("hamburger").style.display = "none";
// //     }
// //  }

// //=======================================================


// // taking out value from an input field (#my email is the input id)


// // function submitEmail(){
// //     var myInput = document.getElementById("my-email");

// //     var userEmail - myInput.value;
// //     console.log(userEmail);
// // }



// //===========================================================




