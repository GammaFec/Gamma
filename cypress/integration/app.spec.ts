describe("App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/home");
    });
    it("Front can be opened", () => {
        cy.contains("Find your ideal buddy");
    });
    it("Visit SignUp page", () => {
        cy.contains("Sign up").click();
    });
    it("Visit Login page and can login", () => {
        cy.contains("Log in").click();
        cy.get('[placeholder="Ingresa Tu Cuenta"]').type("MisuDBXD");
        cy.get('[placeholder="Contraseña"]').type("MisuPasswordSecreta");
        cy.contains("Ingresar").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal(`clicked!!! The user and the password ARE valid`);
        });
    });
    it("Visit Login page Fail", () => {
        cy.contains("Log in").click();
        cy.get('[placeholder="Ingresa Tu Cuenta"]').type("123");
        cy.get('[placeholder="Contraseña"]').type("123");
        cy.contains("Ingresar").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal(`clicked!! The user OR the password IS NOT valid`);
        });
    });
});
