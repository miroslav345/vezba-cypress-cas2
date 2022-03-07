import { loginPage } from "../page_objects_modeling/loginPOM.spec";

describe("celija test", () => {
  beforeEach("log into the app", () => {
    cy.visit("/login");
    loginPage.login("filip.nedovic@vivifyideas.com", "Test12345!");
    cy.get("h1").should("be.visible").and("have.text", "All Galleries");
  });

  it("test h2 u svim celijama", () => {
    cy.get(".cell").each((celija) => {
      expect(celija.find("h2")).to.exist;
      expect(celija.find("p")).to.have.text("Author");
    });
  });

  it("test paginacije", () => {
    cy.get(".cell").should("have.length", 10);
    cy.get("button").last().click();
    cy.get(".cell").should("have.length", 20);
  });
});
// findChildElement((parentElement, childElement) => {
//   return cy.get(parentElement).find(childElement);
// });

// findChildElement(".cell", "h2");
