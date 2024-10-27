import { getTemplate } from "../shared/templates";
import { CommandActionTemplateData } from "./command-action.types";

export const generateCommandAction = (data: CommandActionTemplateData) => {
  const template = getCommandActionTemplate();
  return template(data);
};

export const getCommandActionTemplate = () =>
  getTemplate("command-action.hbs"
  ) as HandlebarsTemplateDelegate<CommandActionTemplateData>;
