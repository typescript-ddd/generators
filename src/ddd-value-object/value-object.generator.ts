import { getTemplate } from "../shared/templates";
import { ValueObjectTemplateData } from "./value-object.types";

export const generateValueObject = (data: ValueObjectTemplateData) => {
  const template = getValueObjectTemplate();
  return template(data);
};

export const getValueObjectTemplate = () =>
  getTemplate(
    "value-object.hbs"
  ) as HandlebarsTemplateDelegate<ValueObjectTemplateData>;
