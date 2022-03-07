/// <reference types="Cypress" />

describe("registration test", () => {
  beforeEach("visit ref=gister page", () => {
    cy.visit("/register");
    cy.url().should("contain", "/register");
  });

  it("register without first name", () => {
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register without last name", () => {
    cy.get("#first-name").type("ime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register with invalid email", () => {
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register with invalid password confirmation", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register withhout checking terms and conditions", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get("button").click();
  });

  it("register with valid data", () => {
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });
});
class RegisterPage {
  get registerHeading() {
    return cy.get("h1");
  }

  get firstNameField() {
    return cy.get("#first-name");
  }

  get lastNameField() {
    return cy.get("#last-name");
  }

  get emailField() {
    return cy.get("#email");
  }

  get passwordField() {
    return cy.get("#password");
  }

  get passwordConfirmationField() {
    return cy.get("#password-confirmation");
  }

  get checkbox() {
    return cy.get(":checkbox");
  }

  get submitBtn() {
    return cy.get("button");
  }

  register(firstName, lastName, email, password) {
    this.firstNameField.type(firstName);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.passwordConfirmationField.type(password);

    this.checkbox.check();
    this.submitBtn.click();
  }
}

export const registerPage = new RegisterPage();