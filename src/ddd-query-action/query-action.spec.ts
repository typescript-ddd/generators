import { QueryActionTemplateData } from "./query-action.types";
import { generateQueryAction } from "./query-action.generator";

describe("QueryAction", () => {

  it("should render template", () => {
    // Arrange
    const data: QueryActionTemplateData = {
      path: "/users",
      actionName: "GetUsers",
      queryName: "FindUsers",
    };

    // Act
    const result = generateQueryAction(data);

    // Assert
    expect(result).toMatchSnapshot();
  });

  it("should render template with request params", () => {
    // Arrange
    const data: QueryActionTemplateData = {
      path: "/user/:id",
      actionName: "GetUser",
      queryName: "FindUser",
      requestParams: [
        { name: "id", type: "string" },
      ]
    };

    // Act
    const result = generateQueryAction(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
