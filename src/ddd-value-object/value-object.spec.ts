import { generateValueObject } from "./value-object.generator";
import { ValueObjectTemplateData } from "./value-object.types";

describe("ValueObject", () => {

  it("should render template", () => {
    // Arrange
    const data: ValueObjectTemplateData = {
      className: "PhoneNumber",
      valueType: "string",
    };

    // Act
    const result = generateValueObject(data);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
