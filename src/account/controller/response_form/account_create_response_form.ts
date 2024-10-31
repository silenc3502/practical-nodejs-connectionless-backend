import {AccountCreateResponse} from "../../service/response/account_create_response";


export class AccountCreateResponseForm {
    constructor(public email: string) {}

    static fromAccountCreateResponse(accountResponse: AccountCreateResponse): AccountCreateResponseForm {
        return new AccountCreateResponseForm(accountResponse.email);
    }
}
