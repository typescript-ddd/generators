import { AggregateTemplateData } from "./aggregate.types";
import { generateAggregate } from "./aggregate.generator";

describe('TrackableAggregate', () => {


    it('should render trackable template', () => {
        // Arrange
        const data:AggregateTemplateData = {
        entityName: 'User',
        properties: [
            { name: 'name', type: 'string' },
        ],
        trackable: true
        };
    
        // Act
        const result = generateAggregate(data);
    
        // Assert
        expect(result).toMatchSnapshot();
    });
});