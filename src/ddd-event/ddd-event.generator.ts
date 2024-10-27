import { getTemplate } from "../shared/templates";
import { EventTemplateData } from "./ddd-event.types";

export const generateEvent = (data: EventTemplateData) => {
  const template = getEventTemplate();
  return template(data);
};

export const getEventTemplate = () =>
  getTemplate(
    __dirname + "/event.hbs"
  ) as HandlebarsTemplateDelegate<EventTemplateData>;
