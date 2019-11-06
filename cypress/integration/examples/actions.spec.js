/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.co.th/');
  });

  it('Search Cypress', () => {
    cy.get('.gLFyf.gsfi')
      .type('cypress')
      .should('have.value', 'cypress')
      .type('{enter}');
  });
});
