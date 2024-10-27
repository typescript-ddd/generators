export interface BaseCommandTemplateData {
  entityName: string;
  properties: { name: string; type: string; isNullable?: boolean }[];
}
