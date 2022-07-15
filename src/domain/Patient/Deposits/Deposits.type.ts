import { CommonParams, ListItems } from "@/domain/Common.type";

export type DepositFilters = {
  user_id: number;
  pid: string;
  contr_id: number;
  contr_code: string;
};

export type Deposit = {
  user_id: number;
  pid: string;
  payer_name: number;
  contr_id: number;
  contr_code: string;
  date_from: string;
  date_to: string;
  date_sign: string;
  suspended: number;
};

export type DepositList = ListItems<Deposit>;

export type DepositParams = Partial<CommonParams & DepositFilters>;
