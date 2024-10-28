describe('template spec', () => {
  it('webcomponent', () => {
    cy.visit('https://output.jsbin.com/sivakuvuja')

    cy.get("#btn")
      .click();

    cy.get("menu-component")
      .should("be.visible");

    cy.get("menu-component")
      .shadow()
      .find("popover-component")
      .should("be.visible");
  })
  it('native', () => {
    cy.visit('https://output.jsbin.com/sivakuvuja')

    cy.get("#btn2")
      .click();

    cy.get(".menu-component")
      .should("be.visible");

    cy.get(".menu-component")
      .find(".popover-component")
      .should("be.visible");
  })
})