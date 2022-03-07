/// <reference types="cypress" />
const Locators = require("../fixtures/Locators.json");
const { faker } = require("@faker-js/faker");
describe("login test", () => {
  let userData = {
    randomName: faker.name.firstName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(),
  };
  before("visit app", () => {
    cy.visit("/");
  });

  it("login with valid credentials", () => {
    cy.get(".nav-link").eq(1).click();
    cy.get(Locators.commonElements.emailField).type(userData.randomEmail);
  });
  cy.get(Locators.commonElements.passwordField).type(userData.randomPassword);
  cy.get(Locators.commonElements.button).click();
});

it("logout", () => {
  cy.get(".nav-link").should("have.length", 4);
  cy.get(".nav-link").eq(3).click();
});
it("login with valid crdentials", ()=>{
  loginPage.login("filip.nedovic1@vivifyideas.com","test12345!")
  cy.get('p').should('be.visible')
  .and('have.text','Bad Credentials')
  .and("have.css","border-color","rgb(245, 198, 203)");

loginPage.loginHeading.should("be.visible")
login.pageloginHeading.should("have.text","Bad credentials")
.and("have.css","border-color","rgb(245, 198, 203)")
.and("have.css","color","rgb ()")
})
it ("login with invalid credentials", ()=>{
  loginHeading.emailField.should("have.text","must valid addres")
  .and("randomEmail","require")
})
