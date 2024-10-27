export interface BaseQueryTemplateData {
  entityName: string;
  properties: { name: string; type: string; isNullable?: boolean }[];
}
