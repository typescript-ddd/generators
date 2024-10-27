import { generateQueryHandler} from "./query-handler.generator";
import { QueryHandlerTemplateData } from "./query-handler.types";

describe("CommandHandler", () => {
  it("should render a template", () => {
    // Arrange
    const data: QueryHandlerTemplateData = {
      entityName: "User",
      properties: [
        { name: "name", type: "string" },
        { name: "email", type: "string" },
      ],
    };

    // Act
    const result = generateQueryHandler(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
