describe("Form Submission", () => {
  const formPageURL = "/form";
  const submitButton = 'button[type="submit"]';
  const formValues = ["Ondra", "ospala@seznam.cz", "Please hire me!"];
  const inputs = ["input:eq(0)", "input:eq(1)", "textarea"];

  beforeEach(() => {
    cy.APIlogin();
    cy.visit(formPageURL);
  });

  it("2.1 Submit Form with Missing Data", () => {
    cy.get(submitButton).click();
    cy.get("input")
      .first()
      .then(($input) => {
        expect($input[0].validationMessage).to.contain(
          "Please fill in this field"
        );
      });
  });

  it("2.2 Submit Form with Valid Data", () => {
    inputs.forEach((input, index) => {
      cy.get(input).type(formValues[index]);
    });
    cy.get(".saved-item").should("not.exist");
    cy.get(submitButton).click();
    cy.get(".saved-item").should("exist", "Saved item is not visible");
  });
});
