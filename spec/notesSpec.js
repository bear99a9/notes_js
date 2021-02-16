describe('Notes', function () {
  it('checks if the user has created a note', () => {
    let notes = new Notes();
    notes.createMessage('Hi Salar')
    isEqual(notes.displayLastMessage(), "Hi Salar");
  });

  // it('displays all messages that have been created', function(){
  //   let notes = new Notes();
  //   notes.createMessage(`Hi Salar`)
  //   notes.createMessage(`Hi Sean`)
  //   notes.createMessage(`Hi Tom`)
  //   isEqual(notes.this.message.length, 3);
  // })

  it('displays all messages that have been created', function(){
    let notes = new Notes();
    notes.createMessage(`Hi Salar`)
    isEqual(notes.displayLastMessage(), "Hi Salar"); // Hi Salar,Hi Sean,Hi Tom
    notes.createMessage(`Hi Sean`)
    isEqual(notes.displayLastMessage(), "Hi Sean");
    notes.createMessage(`Hi Tom`)
    isEqual(notes.displayLastMessage(), "Hi Tom");
  })
})
