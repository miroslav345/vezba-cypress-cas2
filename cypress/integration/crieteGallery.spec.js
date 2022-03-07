const Locators = require("../../fixtures/Locators.json");
class AllGalleriesPage {
  get allGalleriesHeading() {
    return cy.get("h1");
  }

  get searchInput() {
    return cy.get("input");
  }

  get filterBtn() {
    return cy.get("button").first();
  }

  get loadMoreBtn() {
    return cy.get("button").last();
  }
}

export const allGalleriesPage = new AllGalleriesPage();
