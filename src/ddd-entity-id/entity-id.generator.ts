import { getTemplate } from "../shared/templates";
import { EntityIdTemplateData } from "./entity-id.types";

export const generateEntityId = (data: EntityIdTemplateData) => {
  const template = getEntityIdTemplate();
  return template(data);
};

export const getEntityIdTemplate = () =>
  getTemplate(
    __dirname + "/entity-id.hbs"
  ) as HandlebarsTemplateDelegate<EntityIdTemplateData>;
