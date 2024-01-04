const adminData = require("../../fixtures/adminData");
const selectors = require("../../fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin");
});

describe("Admin Login", () => {
  it("Check the admin home page", () => {
    cy.get(selectors.title).should("contain", "Идёмвкино");
    cy.get(selectors.pageHeader).should("contain", "Администраторррская");
    cy.get(selectors.loginSection).should("contain", "Авторизация");
  });

  it("Correct email and password", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Throws an error with invalid email and invalid password", () => {
    cy.login(adminData.inValidEmail, adminData.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Throws an error with invalid email", () => {
    cy.login(adminData.inValidEmail, adminData.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Throws an error with invalid password", () => {
    cy.login(adminData.validEmail, adminData.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
