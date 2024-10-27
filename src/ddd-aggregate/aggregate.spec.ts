import { AggregateTemplateData } from "./aggregate.types";
import { getAggregateTemplate } from "./aggregate.generator";

describe('Aggregate', () => {

  const template = getAggregateTemplate();

    it('should render template', () => {
        // Arrange
        const data:AggregateTemplateData = {
        entityName: 'User',
        properties: [
            { name: 'name', type: 'string' },
        ]
        };
    
        // Act
        const result = template(data);
    
        // Assert
        expect(result).toMatchSnapshot();
    });
});