describe("First Test Case", function() {
    it("Should be equal", function() {
        expect(true).to.equal(true);
    });
    it("Should not be equal", function() {
        expect(true).to.not.equal(true);
    });
    it("Visit a sample site", function() {
        cy.visit("https://example.cypress.io");
        cy.pause();
        cy.contains("type");
        ///cy.contains("Hype");
        cy.contains("type").click();
        cy.url().should("include", "commands");
        cy.get("input[type=email]").type("hh@h.co").should("have.value", "hh@h.co");
    });
});
