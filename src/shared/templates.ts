import * as fs from "fs";
import Handlebars from "./handlebars";

export const getTemplate = (filePath: string) => {
  const template = fs.readFileSync(filePath,
    "utf-8"
  );
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate;
};
