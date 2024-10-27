import * as Handlebars from "handlebars";
import * as strings from "./strings";
import { getAction, getActionActor, getActionVerb } from "./actions";

const vowels = ["a", "e", "i", "o", "u"];

Handlebars.registerHelper(
  "ifEquals",
  (arg1: any, arg2: any, options: Handlebars.HelperOptions) => {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this);
  }
);
Handlebars.registerHelper(
  "ifDefined",
  (value: unknown, options: Handlebars.HelperOptions) => {
    return value !== null && value !== undefined
      ? options.fn(this)
      : options.inverse(this);
  }
);
Handlebars.registerHelper(
  "ifUndefined",
  (value: unknown, options: Handlebars.HelperOptions) => {
    return value === null || value === undefined
      ? options.fn(this)
      : options.inverse(this);
  }
);
Handlebars.registerHelper(
  "contains",
  (needle: string, haystack: string, options: Handlebars.HelperOptions) => {
    needle = Handlebars.escapeExpression(needle);
    haystack = Handlebars.escapeExpression(haystack);
    return haystack.includes(needle) ? options.fn(this) : options.inverse(this);
  }
);
Handlebars.registerHelper(
  "append",
  (str1: string, str2: string) => str1 + str2
);
Handlebars.registerHelper("lbrace", () => "{");
Handlebars.registerHelper("rbrace", () => "}");
Handlebars.registerHelper(
  "docParam",
  (type: string, append: string, name: string) =>
    `@param {${strings.pascalCase(type)}${append}} ${name}`
);
Handlebars.registerHelper("lower", (str?: string) => str?.toLowerCase()) ?? "";
Handlebars.registerHelper("upper", (str?: string) => str?.toUpperCase()) ?? "";
Handlebars.registerHelper("firstUpper", (str?: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
});
Handlebars.registerHelper("camel", (str?: string) =>
  strings.camelCase(str ?? "")
);
Handlebars.registerHelper("pascal", (str?: string) =>
  strings.pascalCase(str ?? "")
);
Handlebars.registerHelper("snake", (str?: string) =>
  strings.snakeCase(str ?? "")
);
Handlebars.registerHelper("kebab", (str?: string) =>
  strings.kebabCase(str ?? "")
);
Handlebars.registerHelper("natural", (str?: string) =>
  strings.naturalCase(str ?? "")
);
Handlebars.registerHelper("noun", (str?: string) => {
  if (!str || str.length === 0) return "";
  return `${
    vowels.slice(0, -1).includes(str.charAt(0).toLowerCase() ?? "") ? "an" : "a"
  } ${strings.singular(strings.naturalCase(str))}`;
});
Handlebars.registerHelper("aOrAn", (str?: string) => {
  if (!str) return "";
  return vowels.slice(0, -1).includes(str?.charAt(0).toLowerCase() ?? "")
    ? "an"
    : "a";
});
Handlebars.registerHelper("plural", (str?: string) =>
  strings.plural(str ?? "")
);
Handlebars.registerHelper("singular", (str?: string) =>
  strings.singular(str ?? "")
);
Handlebars.registerHelper("actionVerb", (str?: string) =>
  getActionVerb(str ?? "")
);
Handlebars.registerHelper("action", (str?: string) => getAction(str ?? ""));
Handlebars.registerHelper("actionActor", (str?: string) =>
  getActionActor(str ?? "")
);

Handlebars.registerHelper("newline", () => new Handlebars.SafeString("\n"));

export default Handlebars;
