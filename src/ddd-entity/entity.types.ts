export interface EntityTemplateData {
  entityName: string;
  trackable?: boolean;
  properties: { name: string; type: string; isNullable?: boolean }[];
}