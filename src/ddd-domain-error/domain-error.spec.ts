import { DomainErrorTemplateData } from "./domain-error.types";
import { generateDomainError } from "./domain-error.generator";

describe("EntityId", () => {
  it("should render domain error template with message", () => {
    // Arrange
    const data: DomainErrorTemplateData = {
      errorName: "Unauthorized",
      message: "User is not authorized to perform this action",
    };

    const result = generateDomainError(data);
    expect(result).toMatchSnapshot();
  });

  it("should render domain error template with message parameter", () => {
    // Arrange
    const data: DomainErrorTemplateData = {
      errorName: "Unauthorized",
    };

    const result = generateDomainError(data);
    expect(result).toMatchSnapshot();
  });

  it("should remove error suffix if present", () => {
    // Arrange
    const data: DomainErrorTemplateData = {
      errorName: "UnauthorizedError",
    };

    const result = generateDomainError(data);
    expect(result).toMatchSnapshot();
  });
});
