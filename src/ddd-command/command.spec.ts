import { CommandTemplateData } from "./command.types";
import { getCommandTemplate } from "./command.generator";

describe("Command", () => {
  const template = getCommandTemplate();

  it("should render template", () => {
    // Arrange
    const data: CommandTemplateData = {
      entityName: "User",
      actionName: "create",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
    };

    // Act
    const result = template(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
