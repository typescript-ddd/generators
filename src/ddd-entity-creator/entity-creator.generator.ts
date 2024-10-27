import { getTemplate } from "../shared/templates";
import { EntityCreatorTemplateData } from "./entity-creator.types";

export const generateEntityCreator = (data: EntityCreatorTemplateData) => {
  const template = getEntityCreatorTemplate();
  return template(data);
};

export const getEntityCreatorTemplate = () =>
  getTemplate(
    __dirname + "/entity-creator.hbs"
  ) as HandlebarsTemplateDelegate<EntityCreatorTemplateData>;
