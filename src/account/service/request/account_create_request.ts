import {Account} from "../../entity/account";

export class AccountCreateRequest {
    constructor(public email: string) {}

    toAccount(): Account {
        return Account.create({ email: this.email });
    }
}
