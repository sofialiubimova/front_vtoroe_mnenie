import { AnyObject } from "@/domain/AnyObject.type";

export function queryStringify(params: AnyObject) {
  return new URLSearchParams(params).toString();
}
