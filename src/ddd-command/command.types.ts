export interface CommandTemplateData {
  entityName: string;
  actionName: "create" | "update" | "delete";
  properties: { name: string; type: string; isNullable?: boolean }[];
}
