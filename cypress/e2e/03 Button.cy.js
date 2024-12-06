describe("Button Interaction", () => {
  const buttonPageURL = "/button-interaction";

  beforeEach(() => {
    cy.APIlogin();
    cy.visit(buttonPageURL);
  });

  it("3.1 Button Text Changes After Click", () => {
    cy.get("button").should("contain", "Press Me");
    cy.get("button").first().click();
    cy.get("p").should("contain", "Button has been pressed");
    cy.get("button")
      .first()
      .should(($button) => {
        assert.notEqual(
          $button.text(),
          "Press Me",
          "Button text did not change."
        );
      });
  });
});
