const adminData = require("../fixtures/adminData");
const selector = require("../fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin");
});

describe("Login admin", () => {
  it("Check the admin home page", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
    cy.get(selector.pageHeader).should("contain", "Администраторррская");
    cy.get(selector.loginSection).should("contain", "Авторизация");
  });

  it("Positive test - Correct email and password", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Negative test - Throws an error with invalid email and invalid password", () => {
    cy.login(adminData.inValidEmail, adminData.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Negative test - Throws an error with invalid email", () => {
    cy.login(adminData.inValidEmail, adminData.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Negative test - Throws an error with invalid password", () => {
    cy.login(adminData.validEmail, adminData.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
