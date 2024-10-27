import pluralize from "pluralize";

export const snakeCase = (str: string) => str.replace(/-/g, '_');
export const camelCase = (str: string) => str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
export const pascalCase = (str: string) => str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());
export const kebabCase = (str: string) => str.replace(/_/g, '-').toLowerCase();
export const naturalCase = (str: string) => splitOnCapital(str.trim()).map(x => x.toLowerCase()).join(' ');
export const plural = (str: string) => pluralize(str, 2);
export const singular = (str: string) => pluralize(str, 1);

const splitOnCapital = (str: string) => str.split(/((?=[A-Z]))/).map(x => x.trim()).filter(x => x.length > 0);