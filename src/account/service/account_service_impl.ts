import {AccountService} from "./account_service";
import {Account} from "../entity/account";
import {AccountRepositoryImpl} from "../repository/account_repository_impl";
import {AccountRepository} from "../repository/account_repository";
import {AccountCreateResponse} from "./response/account_create_response";


export class AccountServiceImpl implements AccountService {
    private static instance: AccountServiceImpl;
    private accountRepository: AccountRepository;

    private constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository;
    }

    public static getInstance(): AccountServiceImpl {
        if (!AccountServiceImpl.instance) {
            AccountServiceImpl.instance = new AccountServiceImpl(AccountRepositoryImpl.getInstance());
        }
        return AccountServiceImpl.instance;
    }

    createAccount(data: { email: string }): AccountCreateResponse {
        const account = Account.create({ email: data.email });
        const savedAccount = this.accountRepository.save(account);
        return AccountCreateResponse.fromAccount(savedAccount);
    }
}

export default AccountServiceImpl.getInstance();
