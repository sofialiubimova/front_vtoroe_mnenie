import { Message, ServerMessage } from "./types";

type Messages = {
  [key: string]: Message;
};
export function messagesFormat(messages: Array<ServerMessage>): Messages {
  return messages.reduce((accum: Messages, message) => {
    const field = message.loc[message.loc.length - 1];
    accum[field] = {
      text: message.msg,
    };
    return accum;
  }, {});
}
