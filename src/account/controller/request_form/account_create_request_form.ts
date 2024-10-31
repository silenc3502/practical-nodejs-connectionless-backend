import {AccountCreateRequest} from "../../service/request/account_create_request";

export class AccountCreateRequestForm {
    constructor(private data: { email: string }) {}

    toCreateRequestForm(): AccountCreateRequest {
        return new AccountCreateRequest(this.data.email);
    }
}
