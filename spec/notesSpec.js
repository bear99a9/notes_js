describe('Notes', function () {
  it('checks if the user has created a note', () => {
    let notes = new Notes();
    notes.createMessage('Hi Salar');
    isEqual(notes.displayLastMessage(), 'Hi Salar');
  });

  // it('displays all messages that have been created', function(){
  //   let notes = new Notes();
  //   notes.createMessage(`Hi Salar`)
  //   notes.createMessage(`Hi Sean`)
  //   notes.createMessage(`Hi Tom`)
  //   isEqual(notes.this.message.length, 3);
  // })

  it('displays all messages that have been created', function () {
    let notes = new Notes();
    notes.createMessage(`Hi Salar`);
    isEqual(notes.displayLastMessage(), 'Hi Salar'); // Hi Salar,Hi Sean,Hi Tom
    notes.createMessage(`Hi Sean`);
    isEqual(notes.displayLastMessage(), 'Hi Sean');
    notes.createMessage(`Hi Tom`);
    isEqual(notes.displayLastMessage(), 'Hi Tom');
  });

  it('displays only the first 20 characters of the note', () => {
    let notes = new Notes();
    notes.createMessage(`Hi Salar how are you? Are you having a great time?`);
    isEqual(notes.displayMessageTitle(), 'Hi Salar how are you');
  });
  // createMessage() => seperates first 20 chars => message the whole lot & title
});
