// // var btn = document.querySelector(".add-task-btn");

// function clickAction() {
//     let modal = document.getElementById("modal");
//     modal.style.visibility = "visible";
    
// };
// function addTask(){
//     preventDefault();
//     let dashboard = document.querySelector(".container");
//     dashboard.style.display = "flex";
// }


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

const addTaskBtn = document.querySelector('.add-task-btn');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.getElementById('cross');


addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});




