import { EntityTemplateData } from "./entity.types";
import { generateEntity } from "./entity.generator";

describe("TrackableEntity", () => {
  it("should render trackable entity template", () => {
    // Arrange
    const data: EntityTemplateData = {
      entityName: "User",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
      trackable: true
    };

    // Act
    const result = generateEntity(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
