export interface QueryHandlerTemplateData {    
    entityName: string;
    properties: { name: string; type: string; isNullable?: boolean }[];
}