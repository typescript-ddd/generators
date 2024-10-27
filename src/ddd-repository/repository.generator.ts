import { getTemplate } from "../shared/templates";
import { RepositoryTemplateData } from "./repository.types";

export const generateRepository = (data: RepositoryTemplateData) => {
  const template = getRepositoryTemplate();
  return template(data);
};

export const getRepositoryTemplate = () =>
  getTemplate(
    __dirname + "/repository.hbs"
  ) as HandlebarsTemplateDelegate<RepositoryTemplateData>;