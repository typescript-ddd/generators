import { EntityTemplateData } from "./entity.types";
import { generateEntity } from "./entity.generator";

describe("Entity", () => {
  it("should render template", () => {
    // Arrange
    const data: EntityTemplateData = {
      entityName: "User",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
    };

    // Act
    const result = generateEntity(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
