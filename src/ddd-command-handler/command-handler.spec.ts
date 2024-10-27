import { generateCommandHandler } from "./command-handler.generator";
import { CommandHandlerInput } from "./command-handler.types";

describe("CommandHandler", () => {
  it("should render with create action", () => {
    // Arrange
    const data: CommandHandlerInput = {
      entityName: "User",
      actionName: "create",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
    };

    // Act
    const result = generateCommandHandler(data);

    // Assert
    expect(result).toMatchSnapshot();
  });

  it("Should render with update action", () => {
    // Arrange
    const data: CommandHandlerInput = {
      entityName: "User",
      actionName: "update",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
    };
    // Act
    const result = generateCommandHandler(data);
    // Assert
    expect(result).toMatchSnapshot();
  });

  it("Should render with delete action", () => {
    // Arrange
    const data: CommandHandlerInput = {
      entityName: "User",
      actionName: "delete",
      properties: [],
    };
    // Act
    const result = generateCommandHandler(data);
    // Assert
    expect(result).toMatchSnapshot();
  });
});
