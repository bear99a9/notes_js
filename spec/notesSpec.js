describe('Notes', function () {
    it('checks if the user has created a note', () => {
        let notes = new Notes();
        notes.createMessage(`Hi Salar`)
        isEqual(notes.messages(), `Hi Salar`);
    });
})
