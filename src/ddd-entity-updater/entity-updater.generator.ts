import { getTemplate } from "../shared/templates";
import { EntityUpdaterTemplateData } from "./entity-updater.types";

export const generateEntityUpdater = (data: EntityUpdaterTemplateData) => {
  const template = getEntityUpdaterTemplate();
  return template(data);
};

export const getEntityUpdaterTemplate = () =>
  getTemplate("entity-updater.hbs"
  ) as HandlebarsTemplateDelegate<EntityUpdaterTemplateData>;
