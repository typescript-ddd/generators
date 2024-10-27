import { EntityDeleterTemplateData } from "./entity-deleter.types";
import { generateEntityDeleter } from "./entity-deleter.generator";

describe("EntityDeleter", () => {
    it("should render an entity deleter template", () => {
        // Arrange
        const data: EntityDeleterTemplateData = {
        entityName: "User"
        };
    
        // Act
        const result = generateEntityDeleter(data);
    
        // Assert
        expect(result).toMatchSnapshot();
    });
    });