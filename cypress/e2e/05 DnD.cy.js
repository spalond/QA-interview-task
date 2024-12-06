describe("Drag and drop Interaction", () => {
  const dragItem = ".drag-item";
  const firstItem = ".drag-item:eq(0)";
  const targetItem = ".drag-item:eq(2)";
  const dataTransfer = new DataTransfer();

  beforeEach(() => {
    cy.APIlogin();
  });

  it("5.1 DND items can be moved", () => {
    cy.get(dragItem).each(($el) => {
      cy.wrap($el).should("have.attr", "draggable", "true");
    });
    cy.get('.drag-item')
      .first()
      .should("have.text", "Item 1");
    
    cy.get(firstItem).trigger("dragstart", { dataTransfer });
    cy.get(targetItem).trigger("dragover", { dataTransfer });
    cy.get(targetItem).trigger("drop", { dataTransfer });

    cy.get('.drag-item')
      .first()
      .should("have.text", "Item 2");
  });
});
