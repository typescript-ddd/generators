import { getTemplate } from "../shared/templates";
import { DomainErrorTemplateData } from "./domain-error.types";

export const generateDomainError = (data: DomainErrorTemplateData) => {
  const template = getDomainErrorTemplate();
  return template({
    ...data,
    // Remove the "Error" suffix from the error name
    errorName: data.errorName.endsWith("Error") ? data.errorName.slice(0, -5) : data.errorName,
  });
};

export const getDomainErrorTemplate = () =>
  getTemplate(
    __dirname + "/domain-error.hbs"
  ) as HandlebarsTemplateDelegate<DomainErrorTemplateData>;
