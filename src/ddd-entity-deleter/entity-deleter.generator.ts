import { getTemplate } from "../shared/templates";
import { EntityDeleterTemplateData } from "./entity-deleter.types";

export const generateEntityDeleter = (data: EntityDeleterTemplateData) => {
  const template = getEntityDeleterTemplate();
  return template(data);
};

export const getEntityDeleterTemplate = () =>
  getTemplate(
    __dirname + "/entity-deleter.hbs"
  ) as HandlebarsTemplateDelegate<EntityDeleterTemplateData>;
