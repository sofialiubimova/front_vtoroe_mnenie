import { AnyObject } from "@/domain/AnyObject.type";

export type Request = {
  method: "get" | "post" | "delete" | "put" | "patch" | "options";
  url: string;
  data?: any;
  config?: AnyObject;
};
