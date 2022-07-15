export type ServerMessage = {
  loc: Array<string>;
  msg: string;
  type: string;
};

export type ServerPayload<D> = {
  data?: D;
  messages?: {
    detail?: Array<ServerMessage> | string;
  };
  message?: string;
};

export type Message = {
  text: string | null;
};

export type CommonErrorsType = Array<string>;

export type Messages = {
  byFields: {
    [key: string]: Message;
  };
  common: CommonErrorsType;
};
