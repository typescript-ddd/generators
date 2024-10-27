import { getTemplate } from "../shared/templates";
import { BaseCommandTemplateData } from "./base-command.types";

export const generateBaseCommand = (data: BaseCommandTemplateData) => {
  const template = getBaseCommandTemplate();
  return template(data);
};

export const getBaseCommandTemplate = () =>
  getTemplate("base-command.hbs"
  ) as HandlebarsTemplateDelegate<BaseCommandTemplateData>;
