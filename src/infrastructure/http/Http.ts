import { AnyObject } from "@/domain/AnyObject.type";
import { Connection } from "./Connection.interface";

export class Http {
  constructor(private client: Connection) {}

  private getUrl(url: string) {
    return url.startsWith("/") && process.env.NODE_ENV !== "development"
      ? `${process.env.VUE_APP_API_ENDPOINT}${url}`
      : url;
  }

  get(url: string, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "get",
      config,
    });
  }

  post(url: string, data?: any, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "post",
      data,
      config,
    });
  }

  put(url: string, data?: any, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "put",
      data,
      config,
    });
  }

  patch(url: string, data?: any, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "patch",
      data,
      config,
    });
  }

  delete(url: string, data?: any, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "delete",
      data,
      config,
    });
  }

  options(url: string, config?: AnyObject) {
    return this.client.request({
      url: this.getUrl(url),
      method: "options",
      config,
    });
  }
}
