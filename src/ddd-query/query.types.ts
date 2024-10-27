export interface QueryTemplateData {
  entityName: string;
  actionName?: string;
  properties: { name: string; type: string; isNullable?: boolean }[];
}
