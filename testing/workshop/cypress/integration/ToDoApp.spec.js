/* eslint-disable no-undef */
describe("Todo app", () => {
  it("contains correct titles", () => {
    cy.visit("http://localhost:3000/05");

    cy.contains("Testing");
    cy.contains("My ToDos");
  });

  it("contains todo list", () => {
    cy.get(".ant-layout-content > div > ul > li").should("have.length", 3);

    cy.contains("Learn React");
    cy.contains("Go to Code.Hub");
    cy.contains("Go out for a drink");
  });

  it("can add a new todo", () => {
    cy.get("[data-testid=addTodo]").clear().type("Learn Redux");
    cy.get("button").contains("Add ToDo").click();
    cy.get(".ant-layout-content > div > ul > li").should("have.length", 4);

    cy.contains("Learn Redux");
  });
});
