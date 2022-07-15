import { DepositsInterface } from "./Deposits.interface";
import { DepositParams } from "./Deposits.type";

export class DepositsService {
  constructor(private depositsRepository: DepositsInterface) {}

  list(params?: DepositParams) {
    return this.depositsRepository.list(params);
  }
}
