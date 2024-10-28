describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://output.jsbin.com/moroceduje/1')

    cy.get("button")
      .click();

    cy.get("menu-component")
      .should("be.visible");

    cy.get("menu-component")
      .shadow()
      .find("popover-component")
      .should("be.visible");
  })
})