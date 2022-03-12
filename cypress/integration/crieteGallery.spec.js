//kopirano
import { loginPage } from "../pageObjects/loginPOM";
import { faker } from "@faker-js/faker";
import { createGallery } from "../pageObjects/createGalleryPOM";

describe("create gallery", () => {
  let galleryData = {
    title: faker.name.title(),
    description: faker.lorem.sentence(),
    url: faker.image.imageUrl(".jpg"),
  };

  it("visit create page", () => {
    cy.visit("/create");
    loginPage.login("bla12345@bla.com", "bla12345");
    cy.wait(1000);
    cy.get(".nav-link").eq(2).click();
    createGallery.create(
      galleryData.title,
      galleryData.description,
      galleryData.url
    );
  });
  it("gallery naslov h1", () => {
    cy.get("h1");
  });
  it("test create gallery", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/galleries",
    }).as("galleryCreation");

    cy.visit("/create");
    cy.contains("Logout").should("be.visible");

    createGalleryPage.createGallery(
      "test galerija",
      "moja galerija",
      "neki-jpg.jpg"
    );
    cy.wait("@galleryCreation").then((interception) => {
      console.log("ID", interception.response.body.id);
      galleryId = interception.response.body.id;

      cy.visit(`/galleries/${galleryId}`);
      cy.get("h1").should("have.text", "test galerija");
    });
  });
});
