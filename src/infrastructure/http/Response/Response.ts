import { messagesFormat } from "./messagesFormat";
import { Messages, ServerPayload } from "./types";

export class Response<D, A = null> {
  readonly payload: {
    data: D | null;
    messages: Messages;
    additionalInfo?: A;
  };
  readonly status: number;
  readonly success: boolean;

  constructor({
    payload,
    status,
    success,
  }: {
    payload: ServerPayload<D>;
    status: number;
    success: boolean;
  }) {
    const { data = null, message, messages } = payload;
    const byFields =
      messages?.detail && Array.isArray(messages?.detail)
        ? messagesFormat(messages.detail)
        : {};
    let commonMessage = message ?? "";
    if (!commonMessage)
      commonMessage =
        typeof messages?.detail === "string" ? messages?.detail : "";

    const common = commonMessage ? [commonMessage] : [];

    this.payload = {
      data,
      messages: {
        byFields,
        common,
      },
    };
    this.status = status;
    this.success = success;
  }
}
