import { BaseQueryTemplateData } from "./base-query.types";
import { generateBaseQuery } from "./base-query.generator";

describe("Query", () => {

  it("should render template", () => {
    // Arrange
    const data: BaseQueryTemplateData = {
      entityName: "User",
      properties: [
        { name: "id", type: "UserId" },
      ],
    };

    // Act
    const result = generateBaseQuery(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
