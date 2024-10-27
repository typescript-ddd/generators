import { getTemplate } from "../shared/templates";
import {
  QueryHandlerTemplateData,
} from "./query-handler.types";

export const generateQueryHandler = (data: QueryHandlerTemplateData) => {
  const template = getQueryHandlerTemplate();

  return template(data);
};

export const getQueryHandlerTemplate = () =>
  getTemplate("query-handler.hbs"
  ) as HandlebarsTemplateDelegate<QueryHandlerTemplateData>;
