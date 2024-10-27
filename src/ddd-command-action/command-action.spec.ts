import { CommandActionTemplateData } from "./command-action.types";
import { generateCommandAction } from "./command-action.generator";

describe("CommandAction", () => {

  it("should render template", () => {
    // Arrange
    const data: CommandActionTemplateData = {
      method: "POST",
      path: "/users",
      actionName: "PostUser",
      commandName: "CreatUser",
    };

    // Act
    const result = generateCommandAction(data);

    // Assert
    expect(result).toMatchSnapshot();
  });

  it("should render template with request params", () => {
    // Arrange
    const data: CommandActionTemplateData = {
      method: "POST",
      path: "/users",
      actionName: "PostUser",
      commandName: "CreatUser",
      requestParams: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
      status: 201,
    };

    // Act
    const result = generateCommandAction(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
