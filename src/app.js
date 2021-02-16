//Selectors
const messageInput = document.querySelector('.message-input');
const messageButton = document.querySelector('.message-button');
const linkButton = document.querySelector('.button');
const messageList = document.querySelector('.message-list');
const notes = new Notes();
//Event listeners
messageButton.addEventListener('click', addMessage);
messageList.addEventListener('click', deleteComplete);
// linkButton.addEventListener('click', link);

//functions

function addMessage(event) {
  notes.createMessage(messageInput.value);
  console.log(notes);
  console.log(notes.displayLastMessage());

  //Prevent form from submitting so it doesn't refresh the page
  //when you submit
  event.preventDefault();
  //Message Div --> creates the box for the text to go into after submitting.
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  //create LI --> Allows you to type your message
  //and for it to be stored on the list
  const newMessage = document.createElement('li');
  // You can enter whatever you like for it to be displayed on the page
  newMessage.innerText = notes.displayMessageTitle();
  console.log(notes.displayMessageTitle());
  newMessage.classList.add('message-item');
  //applies the info to the to parent messageDiv.
  messageDiv.appendChild(newMessage);
  //applies the info to the to parent messageList which contains all the info.
  messageList.appendChild(messageDiv);
  //clear Message text box so you can input something different
  messageInput.value = '';

  // newMessage.innerHTML = '<p>jay </p>';
  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add('complete-button');
  messageDiv.appendChild(completedButton);
  //Check delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
  deleteButton.classList.add("delete-button");
  messageDiv.appendChild(deleteButton);
}

// function link(event) {
//   linkButton.innerHTML = '<section> hi </section>';
// }

function deleteComplete(event) {
  const item = event.target;
  //Delete message
  if (item.classList[0] === 'delete-button') {
    const message = item.parentElement;
    //Animation for it falling
    message.classList.add("fall");
    //With this is will then wait for it to fall and then execute the remove function
    message.addEventListener('transitionend', function () {
      message.remove();
    })

  }
  // complete message
  if (item.classList[0] === 'complete-button') {
    const message = item.parentElement;
    message.classList.toggle("completed");
  }
}
