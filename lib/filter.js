//app.js 
//If we want to add a filter (probably pointless for us) we can add in the below.
//Note* I got an error from doing this 

// const filterOption = document.querySelector('.filter-message');

// filterOption.addEventListener('click', filterMessage);

// function filterMessage(event) {
//   const notes = messageList.childNodes;
//   notes.forEach(function (message) {
//     switch (event.target.value) {
//       case "all":
//         message.style.display = "flex";
//         break;
//       case "completed":
//         if (message.classList.contains("completed")) {
//           message.style.display = "flex";
//         } else {
//           message.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!message.classList.contains("completed")) {
//           message.style.display = "flex";
//         } else {
//           message.style.display = "none";
//         }
//          break;
//     }
//   });
// }

//index.html --> after button, if you want to put a filter in-->
{/* <div class="select">
 <select name="messages" class="filter-message">
   <option value="all">All</option>
   <option value="completed">Completed</option>
   <option value="uncompleted">Uncompleted</option>
 </select>
</div> */}

//**CSS for the filter to match what we have
// CUSTOM SELECTOR
// select {
//   -webkit - appearance: none;
//   -moz - appearance: none;
//   appearance: none;
//   outline: none;
//   box - shadow: none;
//   border: none;
//   background - image: none;
//   height: 1rem;
// }
// /* this is all for the filter
// /* Custom Select */
// .select {
//   margin: 1rem;
//   position: relative;
//   overflow: hidden;
// }
// select {
//   color: #ff6f47;
//   font - family: "Poppins bold", sans - serif;
//   cursor: pointer;
//   width: 10rem;
// }
// /* Arrow */
// .select:: after {
//   content: "\25BC";
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 0.1rem;
//   background: #45afaa;
//   cursor: pointer;
//   pointer - events: none;
//   transition: 0.7s ease;
// }

// .select: hover:: after{
//   background: white;
// }

