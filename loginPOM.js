export default class loginPage {
  get email() {
    return cy.get("#email");
  }
  get password() {
    return cy.get("#password");
  }
  get submitBtn() {
    return cy.get("button");
  }
  logoutBtn() {
    return cy.get(".nav-link").eq(3);
  }
  login(param1, param2) {
    this.email.type(param1);
    this.password.type(param2);
    this.submitBtn.click();
  }
}
export const loginPage = new loginPage();
