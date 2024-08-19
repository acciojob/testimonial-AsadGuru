//your JS code here. If required.

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("Checking tags", () => {
    cy.get('h1').should('have.length', 1)
    cy.get('div').should('have.length', 5) // Updated this line
    cy.get('p').should('have.length', 4)
  });
  it('testing parent div', () => {
    const properties = ['padding', 'background-color']
    properties.forEach(property => {
      cy.get('div')
      .first()
      .should('have.css', property)
    })
  })
  it('testing child divs', () => {
    const properties = ['padding', 'background-color', 'border']
    properties.forEach(property => {
      cy.get('div')
      .eq(1)
      .should('have.css', property)
      cy.get('div')
      .eq(2)
      .should('have.css', property)
    })
  }
});
