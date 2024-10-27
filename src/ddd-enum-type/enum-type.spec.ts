import { generateEnumType } from "./ddd-enum-type.generator";
import { EnumTypeTemplateData } from "./ddd-enum-type.types";

describe("EnumType", () => {
    
      it("should render template", () => {
     // Arrange
     const data: EnumTypeTemplateData = {
        typeName: "Roles",
        description: "Represents the application user roles.",
        values: [
            { key: "Admin", value: "Admin", description: "Admin role" },
            { key: "User", value: "User", description: "User role" },
        ],
     };
    
     // Act
     const result = generateEnumType(data);
    
     // Assert
     expect(result).toMatchSnapshot();
      });
    
    });