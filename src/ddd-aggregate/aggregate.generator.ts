import { getTemplate } from "../shared/templates";
import { AggregateTemplateData } from "./aggregate.types";

export const generateAggregate = (data: AggregateTemplateData) => {
  const template = data.trackable ? getTrackableAggregateTemplate() : getAggregateTemplate();
  return template(data);
};

export const getAggregateTemplate = () => getTemplate(__dirname + "/aggregate.hbs");
export const getTrackableAggregateTemplate = () => getTemplate(__dirname + "/trackable-aggregate.hbs");