import { getTemplate } from "../shared/templates";
import { EntityTemplateData } from "./entity.types";

export const generateEntity = (data: EntityTemplateData) => {
  const template = data.trackable
    ? getTrackableEntityTemplate()
    : getEntityTemplate();
  return template(data);
};

export const getTrackableEntityTemplate = () =>
  getTemplate(
    __dirname + "/trackable-entity.hbs"
  ) as HandlebarsTemplateDelegate<EntityTemplateData>;

export const getEntityTemplate = () =>
  getTemplate(
    __dirname + "/entity.hbs"
  ) as HandlebarsTemplateDelegate<EntityTemplateData>;
