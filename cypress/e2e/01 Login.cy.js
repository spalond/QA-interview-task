describe("Login functionality", () => {
  let loginData;
  const usernameInput = '[data-cy="username-input"]';
  const passwordInput = '[data-cy="password-input"]';
  const loginButton = '[data-cy="login-button"]';
  const errorMessage = '[data-cy="error-message"]';

  beforeEach(() => {
    cy.fixture("loginData")
      .then((data) => {
        loginData = data;
        expect(loginData).to.have.property("loginPageUrl");
      })
      .then(() => {
        cy.visit(loginData.loginPageUrl);
      });
  });

  it("1.1 Login with valid Credentials", () => {
    cy.get(usernameInput).type(loginData.username);
    cy.get(passwordInput).type(loginData.password);
    cy.get(loginButton).click();

    cy.contains("Welcome").should("be.visible");
    cy.url().should("not.include", loginData.loginPageUrl);
  });

  it("1.2 Login with invalid Credentials", () => {
    cy.get(usernameInput).type(loginData.username + "error");
    cy.get(passwordInput).type(loginData.password + "error");
    cy.get(loginButton).click();

    cy.get(errorMessage).should("contain", "Invalid credentials.");
    cy.url().should("include", loginData.loginPageUrl);
  });

  it("1.3 Login with Missing Credentials", () => {
    cy.get(loginButton).click();
    cy.get(usernameInput).then(($input) => {
      expect($input[0].validationMessage).to.contain(
        "Please fill in this field"
      );
    });
  });

  it("1.4 API Login with Valid Credentials", () => {
    cy.APIlogin();
  });
});
