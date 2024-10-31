import {Account} from "../entity/account";
import {AccountCreateResponse} from "./response/account_create_response";


export interface AccountService {
    createAccount(data: { email: string }): AccountCreateResponse;
}
