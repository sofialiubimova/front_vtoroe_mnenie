import { errorMessagesByCodes } from "@/domain/constants/errorMessages";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Connection } from "./Connection.interface";
import { Request } from "./Request.type";
import { PayloadResponse, Response } from "./Response.type";

export class Axios implements Connection {
  private readonly instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }

  async request({ url, method, data, config }: Request): Promise<Response> {
    const payload: PayloadResponse = {};

    try {
      const response = await this.instance.request({
        url,
        method,
        data,
        ...config,
      });

      payload.data = response.data;

      return {
        status: response.status,
        success: true,
        payload,
      };
    } catch (error: any) {
      const code = error.response?.status || error;
      const payloadMessage =
        errorMessagesByCodes[code] ||
        (typeof error.response?.data === "string" ? error.response?.data : "");
      if (payloadMessage) payload.message = payloadMessage;
      if (typeof error.response?.data === "object")
        payload.messages = error.response?.data;

      return {
        status: error.response?.status,
        success: false,
        payload,
      };
    }
  }
}
