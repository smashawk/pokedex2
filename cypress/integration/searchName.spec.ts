describe("searchName", () => {
	const baseUrl = Cypress.env("baseUrl");

	it("Can search フシギダネ", () => {
		cy.visit(baseUrl);

		cy.get("[data-testid=menu-1]").click();
		cy.location("pathname").should("eq", "/pokemon");

		cy.get("[data-testid=suggestTextField]").click();
		cy.get("[data-option-index=0]").click();

		cy.get("[data-testid=descid-1] > dl  > :nth-child(2)").should(
			"have.text",
			"1"
		);
	});
});
