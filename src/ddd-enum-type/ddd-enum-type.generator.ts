import { getTemplate } from "../shared/templates";
import { EnumTypeTemplateData } from "./ddd-enum-type.types";

export const generateEnumType = (data: EnumTypeTemplateData) => {
  const template = getEnumTypeTemplate();
  return template(data);
};

export const getEnumTypeTemplate = () =>
  getTemplate("enum-type.hbs"
  ) as HandlebarsTemplateDelegate<EnumTypeTemplateData>;
