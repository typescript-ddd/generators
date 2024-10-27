import { getTemplate } from "../shared/templates";
import { QueryActionTemplateData } from "./query-action.types";

export const generateQueryAction = (data: QueryActionTemplateData) => {
  const template = getQueryActionTemplate();
  return template(data);
};

export const getQueryActionTemplate = () =>
  getTemplate("query-action.hbs"
  ) as HandlebarsTemplateDelegate<QueryActionTemplateData>;
