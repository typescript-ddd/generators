import { EntityUpdaterTemplateData } from "./entity-updater.types";
import { generateEntityUpdater } from "./entity-updater.generator";

describe("EntityUpdater", () => {
    it("should render a updated entity template", () => {
        // Arrange
        const data: EntityUpdaterTemplateData = {
        entityName: "User"
        };
    
        // Act
        const result = generateEntityUpdater(data);
    
        // Assert
        expect(result).toMatchSnapshot();
    });
    });