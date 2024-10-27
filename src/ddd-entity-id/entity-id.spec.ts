import { EntityIdTemplateData } from "./entity-id.types";
import { generateEntityId } from "./entity-id.generator";

describe("EntityId", () => {
    it("should render entity id template", () => {
        // Arrange
        const data: EntityIdTemplateData = {
            entityName: "User",
            idType: "string",
            valueCreator: "Uuid"
        };

        const result = generateEntityId(data);
        expect(result).toMatchSnapshot();
        
    });
})