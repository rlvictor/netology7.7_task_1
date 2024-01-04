const selectors = require("../../fixtures/selectors");

describe("Correctness of the main page display", () => {
  beforeEach(() => {
    // cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
    cy.visit("/");
  });

  it("Shows correct title", () => {
    cy.get(selectors.title).should("contain", "Идёмвкино");
  });

  it("Shows correct weekdays", () => {
    cy.get(selectors.weekday).should("have.length", 7);
  });

  it("Shows correct section of movies", () => {
    cy.get(selectors.movieSection).should("be.visible");
  });
});
