import { queryStringify } from "@/infrastructure/queryStringify";
import { AnyObject } from "./AnyObject.type";

export function getParamsAsString(params: AnyObject) {
  return Object.keys(params).length ? `?${queryStringify(params)}` : "";
}
