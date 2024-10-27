import { getTemplate } from "../shared/templates";
import { EntityTemplateData } from "./entity.types";

export const generateEntity = (data: EntityTemplateData) => {
  const template = data.trackable
    ? getTrackableEntityTemplate()
    : getEntityTemplate();
  return template(data);
};

export const getTrackableEntityTemplate = () =>
  getTemplate("trackable-entity.hbs"
  ) as HandlebarsTemplateDelegate<EntityTemplateData>;

export const getEntityTemplate = () =>
  getTemplate("entity.hbs"
  ) as HandlebarsTemplateDelegate<EntityTemplateData>;
