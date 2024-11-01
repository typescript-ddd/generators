import { getTemplate } from "../shared/templates";
import { CommandTemplateData } from "./command.types";

export const generateCommand = (data: CommandTemplateData) => {
  const template = getCommandTemplate();
  return template(data);
};

export const getCommandTemplate = () =>
  getTemplate("command.hbs"
  ) as HandlebarsTemplateDelegate<CommandTemplateData>;
