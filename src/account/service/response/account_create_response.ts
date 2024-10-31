import {Account} from "../../entity/account";

export class AccountCreateResponse {
    constructor(public email: string) {}

    static fromAccount(account: Account): AccountCreateResponse {
        return new AccountCreateResponse(account.email);
    }
}
