import { BaseCommandTemplateData } from "./base-command.types";
import { generateBaseCommand } from "./base-command.generator";

describe("Query", () => {

  it("should render template", () => {
    // Arrange
    const data: BaseCommandTemplateData = {
      entityName: "User",
      properties: [
        { name: "id", type: "UserId" },
      ],
    };

    // Act
    const result = generateBaseCommand(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
