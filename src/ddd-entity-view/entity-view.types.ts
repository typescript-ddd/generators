
export interface EntityViewTemplateData {
    entityName: string;
    properties: { name: string; type: string; creator?: string; value?: string }[];
}