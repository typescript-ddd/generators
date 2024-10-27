import { generateEvent } from "./ddd-event.generator";
import { EventTemplateData } from "./ddd-event.types";

describe("Event", () => {
  it("should render a created event", () => {
    // Arrange
    const data: EventTemplateData = {
      entityName: "User",
      eventTopic: "user/created",
      eventType: "Created",
    };

    // Act
    const result = generateEvent(data);

    // Assert
    expect(result).toMatchSnapshot();
  });  
});
