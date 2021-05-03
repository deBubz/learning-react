describe('creating a message', () => {
    it('Display the message in the list', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="messageText"]').type('new message');
        cy.get('[data-testid="sendButton"]').click();
        cy.get('[data-testid="messageText"]').should('have.value', '');
        cy.contains('new message');
    });
});

/* 
    this code describe a user
    - entering a website
    - entering 'new message' into a textfield
    - click send button
    - confirm textfield is cleared out
    - confirm new message appeared somewhere
*/
