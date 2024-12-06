describe("Checkbox Interaction", () => {
  const checkboxPageURL = "/switch-interaction";

  beforeEach(() => {
    cy.APIlogin();
    cy.visit(checkboxPageURL);
  });

  it("4.1 Checkbox Toggling", () => {
    cy.get("p").should("contain", "OFF");
    cy.get("input").should("not.be.checked");
    cy.get("input").click();
    cy.get("input").should("be.checked");
    cy.get("p").should("contain", "ON", "Text did not show switch is on");
    cy.get("input").click();
    cy.get("input").should("not.be.checked");
    cy.get("p").should("contain", "OFF", "Text did not show switch is off");
  });
});
