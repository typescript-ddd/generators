import { EntityCreatorTemplateData } from "./entity-creator.types";
import { generateEntityCreator } from "./entity-creator.generator";

describe("EntityCreator", () => {
    it("should render a created entity", () => {
        // Arrange
        const data: EntityCreatorTemplateData = {
        entityName: "User"
        };
    
        // Act
        const result = generateEntityCreator(data);
    
        // Assert
        expect(result).toMatchSnapshot();
    });
    });