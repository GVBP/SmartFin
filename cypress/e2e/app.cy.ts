const identifier = Cypress.env("CLERK_TEST_IDENTIFIER") ?? "";

describe("navigate the application", () => {
  describe("without authentication", () => {
    it("dashboard page", () => {
      cy.visit("/");
      cy.wait(500);
      cy.url().should("include", "/login");
      cy.contains("h1", "Bem-vindo");
      cy.contains("button", "Fazer login ou criar conta");
    });

    it("transactions page", () => {
      cy.visit("/transactions");
      cy.wait(500);
      cy.url().should("include", "/login");
      cy.contains("h1", "Bem-vindo");
      cy.contains("button", "Fazer login ou criar conta");
    });

    it("subscription page", () => {
      cy.visit("/subscription");
      cy.wait(500);
      cy.url().should("include", "/login");
      cy.contains("h1", "Bem-vindo");
      cy.contains("button", "Fazer login ou criar conta");
    });

    it("non-existent page", () => {
      cy.visit("/non-existent", { failOnStatusCode: false });
      cy.wait(500);
      cy.url().should("include", "/non-existent");
      cy.contains("h1", "404");
      cy.contains("h2", "This page could not be found.");
    });
  });

  describe("with authentication", () => {
    beforeEach(() => {
      cy.visit("/login");
      cy.clerkSignIn({
        strategy: "email_code",
        identifier: identifier,
      });
    });

    afterEach(() => {
      cy.clerkSignOut();
    });

    it("dashboard page", () => {
      cy.visit("/");
      cy.wait(500);
      cy.url().should("include", "/?month=");
      cy.contains("h1", "Dashboard");
    });

    it("transactions page", () => {
      cy.visit("/transactions");
      cy.wait(500);
      cy.url().should("include", "/transactions");
      cy.contains("h1", "Transações");
    });

    it("subscription page", () => {
      cy.visit("/subscription");
      cy.wait(500);
      cy.url().should("include", "/subscription");
      cy.contains("h1", "Assinatura");
    });

    it("non-existent page", () => {
      cy.visit("/non-existent", { failOnStatusCode: false });
      cy.wait(500);
      cy.url().should("include", "/non-existent");
      cy.contains("h1", "404");
      cy.contains("h2", "This page could not be found.");
    });
  });
});
