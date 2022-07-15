import { Request } from "./Request.type";
import { Response } from "./Response.type";

export interface Connection {
  request(params: Request): Promise<Response>;
}
