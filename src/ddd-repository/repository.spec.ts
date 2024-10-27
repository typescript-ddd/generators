import { RepositoryTemplateData } from "./repository.types";
import { generateRepository } from "./repository.generator";

describe("Repository", () => {
  it("should render template", () => {
    // Arrange
    const data: RepositoryTemplateData = {
      entityName: "User"
    };

    // Act
    const result = generateRepository(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
