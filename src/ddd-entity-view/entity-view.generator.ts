import { getTemplate } from "../shared/templates";
import { EntityViewTemplateData } from "./entity-view.types";

export const generateEntityView = (data: EntityViewTemplateData) => {
  const template = getEntityViewTemplate();
  return template(data);
};

export const getEntityViewTemplate = () =>
  getTemplate(
    __dirname + "/entity-view.hbs"
  ) as HandlebarsTemplateDelegate<EntityViewTemplateData>;
