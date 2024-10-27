export interface AggregateTemplateData {
    entityName: string;
    trackable?: boolean;
    properties: { name: string; type: string; isNullable?: boolean }[];
}
