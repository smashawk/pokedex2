describe("searchName", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can go to searchName", () => {
		cy.visit(baseUrl);

		cy.get("[data-testid=menu-1]").click();
		cy.location("pathname").should("eq", "/pokemon");
	});
});
