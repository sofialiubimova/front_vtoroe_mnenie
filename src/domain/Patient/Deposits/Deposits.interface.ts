import { Response } from "@/infrastructure/http/Response";
import { DepositList, DepositParams } from "./Deposits.type";

export interface DepositsInterface {
  list(params?: DepositParams): Promise<Response<DepositList>>;
}
