import { ServerMessage } from "./Response/types";

export type PayloadResponse = {
  data?: any;
  message?: string;
  messages?: { detail?: Array<ServerMessage> };
};
export interface Response {
  status: number;
  payload: PayloadResponse;
  success: boolean;
}
