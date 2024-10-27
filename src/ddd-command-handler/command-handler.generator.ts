import { getTemplate } from "../shared/templates";
import {
  CommandHandlerInput,
  CommandHandlerTemplateData,
} from "./command-handler.types";
import { pascalCase } from "../shared/strings";
import { getActionActor } from "../shared/actions";

export const generateCommandHandler = (data: CommandHandlerInput) => {
  const template = getCommandHandlerTemplate();

  return template({
    ...data,
    properties: ["update", "delete"].includes(data.actionName)
      ? [
          { name: "id", type: "string" },
          ...data.properties.filter((x) => x.name !== "id"),          
        ]
      : data.properties,
    actorName: `${pascalCase(data.entityName)}${getActionActor(
      data.actionName
    )}`,
    commandName: `${pascalCase(data.actionName)}${pascalCase(
      data.entityName
    )}Command`,
    viewName: `${pascalCase(data.entityName)}View`,
  });
};

export const getCommandHandlerTemplate = () =>
  getTemplate(
    __dirname + "/command-handler.hbs"
  ) as HandlebarsTemplateDelegate<CommandHandlerTemplateData>;
