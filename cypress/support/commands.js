Cypress.Commands.add("APIlogin", () => {
  cy.fixture("loginData").then((data) => {
    const credentials = {
      username: data.username,
      password: data.password,
    };
    const loginAPI = data.loginAPI;
    const homeAPI = data.homeAPI;

    cy.request({
      method: "POST",
      url: loginAPI,
      body: credentials,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      Cypress.env("authToken", response.body.token);
    });

    const token = Cypress.env("authToken");
    cy.request({
      method: "GET",
      url: homeAPI,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit("/home");
    });
  });
});
