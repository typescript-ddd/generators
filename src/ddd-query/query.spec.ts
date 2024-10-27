import { QueryTemplateData } from "./query.types";
import { generateQuery } from "./query.generator";

describe("Query", () => {

  it("should render template", () => {
    // Arrange
    const data: QueryTemplateData = {
      entityName: "User",
      properties: [
        { name: "id", type: "UserId" },
      ],
    };

    // Act
    const result = generateQuery(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
