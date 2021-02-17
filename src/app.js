//Selectors
const messageInput = document.querySelector('.message-input');
const messageButton = document.querySelector('.message-button');
const linkButton = document.querySelector('.link-button');
const messageList = document.querySelector('.message-list');
const notes = new Notes();

//Event listeners
document.addEventListener('DOMContentLoaded', getNotes); //If everything loads up run the function of getNotes
messageButton.addEventListener('click', addMessage);
messageList.addEventListener('click', deleteCompleteLink);

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
  newMessage.innerHTML = notes.displayMessageTitle();
  console.log(notes.displayMessageTitle());
  newMessage.classList.add('message-item');

  //applies the info to the to parent messageDiv.
  messageDiv.appendChild(newMessage);

  //ADD MESSAGE TO LOCAL STORAGE
  saveLocalNotes(messageInput.value);

  // newMessage.innerHTML = '<p>jay </p>';
  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add('complete-button');
  messageDiv.appendChild(completedButton);

  //Check delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
  deleteButton.classList.add('delete-button');
  messageDiv.appendChild(deleteButton);

  const linkButton = document.createElement('button');
  linkButton.innerHTML = '<i class = "fas fa-link"></i>';
  linkButton.classList.add('link-button');
  messageDiv.appendChild(linkButton);


  //applies the info to the to parent messageList which contains all the info.
  messageList.appendChild(messageDiv);

  //clear Message text box so you can input something different
  messageInput.value = '';
}

// function link(event) {
//   linkButton.innerHTML = '<section> hi </section>';
// }

function deleteCompleteLink(event) {
  const item = event.target;
  console.log(item);
  //Delete message
  if (item.classList[0] === 'delete-button') {
    const message = item.parentElement;

    //Animation for it falling
    message.classList.add('fall');
    removeLocalNotes(message); //This is part of removing the message from the local storage
    //With this is will then wait for it to fall and then execute the remove function
    message.addEventListener('transitionend', function () {
      message.remove();
    });

  }
  // complete message
  if (item.classList[0] === 'complete-button') {
    const message = item.parentElement;
    message.classList.toggle('completed');
  }

  if (item.classList[0] === 'link-button') {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = notes.displayLastMessage();
  }
}


//To check local storage go to google chrome console --> Application --> Local storage --> click on the file
////JSON.parse(text) will convert the string in the brackets into a javascript object --
//A common use of JSON is to read data from a web server, and display the data in a web page.
//stringify converts a Javascript object or value to a JSON string
//The getItem() method returns value of the specified Storage Object item.
//The setItem() when passed a key name and value (like below), will add that key to the given Storage object. I think it gives stores the item with a key attached to the object
function saveLocalNotes(message) {
  //Check - Are things already being stored?
  let notes;
  //checks if notes exist --> if = null/doesn't exist, then we want to create an empty array.
  if (localStorage.getItem('notes') === null) {
    notes = [];
  } else {
    //This assumes that you already have something there and you will 'parse'/take it back and create it into an array
    notes = JSON.parse(localStorage.getItem('notes'));
  }

  notes.push(message);
  localStorage.setItem('notes', JSON.stringify(notes));
}

//The below allows you to clear the items in the local storage in the console
//You may need to hash out the above for it to work
// localStorage.clear();


//using get notes we are able to display the items on the page
//

function getNotes() {
  // we do our check again to see if messages have been stored
  let notes;
  if (localStorage.getItem('notes') === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem('notes'));
  }
  //loop over them and recreate the whole process of what we've done.
  notes.forEach(function (message) {
    //This is everything from line 23-51 except changed line 112 & removed savelocalNotes,

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    const newMessage = document.createElement('li');
    newMessage.innerText = message; // no longer need the value from input anymore. Need it from local storage instead where we are running the for each function;
    newMessage.classList.add('message-item');
    messageDiv.appendChild(newMessage);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    messageDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    messageDiv.appendChild(deleteButton);

    const linkButton = document.createElement('button');
    linkButton.innerHTML = '<i class = "fas fa-link"></i>';
    linkButton.classList.add('link-button');
    messageDiv.appendChild(linkButton);

    messageList.appendChild(messageDiv);
  });
}

// using the click on delete
//Using an the index of the messages we are able to remove items out of the array. Using method of splice
//splice
function removeLocalNotes(message) {
  //Once again to check if messages have been stored
  let notes;
  if (localStorage.getItem('notes') === null) {
    notes = [];
  } else {
    //This assumes that you already have something there and you will 'parse'/take it back and create it into an array
    notes = JSON.parse(localStorage.getItem('notes'));
  }
  //the message.children brings us back the message item, complete button and the delete button,
  //if we use [0] as our position we are able to use the li.message-item which stores the text. The div is the parent
  //notes.indexOf will give us back the position of the element
  //using the splice method it can then remove that element.
  //the ,1 says we remove one element
  console.log(message.children[0]);
  const messageIndex = message.children[0].innerText;
  console.log(messageIndex);
  notes.splice(notes.indexOf(messageIndex), 1);
  //pushes the deleted back to the storage

  localStorage.setItem('notes', JSON.stringify(notes));
}
