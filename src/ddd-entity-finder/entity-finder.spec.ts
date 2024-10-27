import { EntityFinderTemplateData } from "./entity-finder.types";
import { generateEntityFinder } from "./entity-finder.generator";

describe("EntityCreator", () => {
  it("should render a created entity", () => {
    // Arrange
    const data: EntityFinderTemplateData = {
      entityName: "User",
    };

    // Act
    const result = generateEntityFinder(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
