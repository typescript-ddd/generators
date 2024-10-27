export interface CommandActionTemplateData {
  actionName: string;
  commandName: string;
  method: string;
  path: string;
  requestParams?: { name: string; type: string }[];
  status?: number;
}
