/// <reference types="cypress"/>

describe("test load more on All Galleryes", () => {
  before(() => {
    cy.visit("/");
  });

  it("find cells", () => {
    cy.get(".cell").then((el) => {
      expect(el.length).to.be.eq(10);
    });
  });
  it("find button", () => {
    cy.get(".btn-custom").click();
    cy.wait(1000)
  });

  it("find cells", () => {
    cy.get(".cell").then((el) => {
      expect(el.length).to.be.eq(20);
    });
})
})
