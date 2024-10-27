import * as fs from "fs";
import Handlebars from "./handlebars";
import { templatePath } from "../paths";

export const getTemplate = (filePath: string) => {
  const template = fs.readFileSync(templatePath(filePath),
    "utf-8"
  );
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate;
};
