import { generateEntityView } from "./entity-view.generator";
import { EntityViewTemplateData } from "./entity-view.types";

describe("EntityView", () => {
  it("should render a created entity view with view property", () => {
    // Arrange
    const data: EntityViewTemplateData = {
      entityName: "User",
      properties: [
        { name: "name", type: "string", value: "value" },
        { name: "email", type: "EmailView", creator: "EmailView" },
      ],
    };

    // Act
    const result = generateEntityView(data);

    // Assert
    expect(result).toMatchSnapshot();
  });

  it("should render a created entity view with view property value", () => {
    // Arrange
    const data: EntityViewTemplateData = {
      entityName: "User",
      properties: [
        { name: "name", type: "string", value: "value" },
        {
          name: "email",
          type: "string",
          creator: "EmailView",
          value: "emailAddress",
        },
      ],
    };

    // Act
    const result = generateEntityView(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
