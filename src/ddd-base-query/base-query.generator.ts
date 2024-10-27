import { getTemplate } from "../shared/templates";
import { BaseQueryTemplateData } from "./base-query.types";

export const generateBaseQuery = (data: BaseQueryTemplateData) => {
  const template = getBaseQueryTemplate();
  return template(data);
};

export const getBaseQueryTemplate = () =>
  getTemplate(
    __dirname + "/base-query.hbs"
  ) as HandlebarsTemplateDelegate<BaseQueryTemplateData>;
