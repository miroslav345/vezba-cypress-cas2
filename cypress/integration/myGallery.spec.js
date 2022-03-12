import { loginPage } from "../pageObjects/loginPOM";

describe("test my gallery", () => {
  before("visit my gallery", () => {
    cy.visit("/login");
    loginPage.login("bla12345@bla.com", "bla12345");
    cy.wait(1000);
    cy.visit("/galleries/5390");
  });

  it("title-style", () => {
    cy.get(".title-style").then((el) => {
      expect(el).contain("bozemoj");
    });
  });
  it("autor exist", () => {
    cy.get("h5")
      .get("a")
      .then((el) => {
        expect(el).contain("bla bla");
      });
  });
  it("description", () => {
    cy.get("p").then((el) => {
      expect(el).contain("minimoi");
    });
  });
  it("contains comments", () => {
    cy.get(".list-group-item")
      .first()
      .find("p")
      .first()
      .then((el) => {
        expect(el).contain("konacno slika za gallery");
      });
  });
});
