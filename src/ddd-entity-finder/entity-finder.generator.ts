import { getTemplate } from "../shared/templates";
import { EntityFinderTemplateData } from "./entity-finder.types";

export const generateEntityFinder = (data: EntityFinderTemplateData) => {
  const template = getEntityFinderTemplate();
  return template(data);
};

export const getEntityFinderTemplate = () =>
  getTemplate("entity-finder.hbs"
  ) as HandlebarsTemplateDelegate<EntityFinderTemplateData>;
