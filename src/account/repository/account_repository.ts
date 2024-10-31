import {Account} from "../entity/account";

export interface AccountRepository {
    save(account: Account): Account;
    findById(id: string): Account | undefined;
    findAll(): Account[];
}
