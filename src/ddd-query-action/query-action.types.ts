export interface QueryActionTemplateData {
  actionName: string;
  queryName: string;
  path: string;
  requestParams?: { name: string; type: string }[];
}
