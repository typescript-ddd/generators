import { getTemplate } from "../shared/templates";
import { QueryTemplateData } from "./query.types";

export const generateQuery = (data: QueryTemplateData) => {
  const template = getQueryTemplate();
  return template({
    actionName: "Find",
    ...data,
  });
};

export const getQueryTemplate = () =>
  getTemplate("query.hbs"
  ) as HandlebarsTemplateDelegate<QueryTemplateData>;
