import {AccountRepository} from "./account_repository";
import {Account} from "../entity/account";


export class AccountRepositoryImpl implements AccountRepository {
    private static instance: AccountRepositoryImpl;

    private accountList: Account[] = [];

    private constructor() {}

    public static getInstance(): AccountRepositoryImpl {
        if (!AccountRepositoryImpl.instance) {
            AccountRepositoryImpl.instance = new AccountRepositoryImpl();
        }
        return AccountRepositoryImpl.instance; // 인스턴스를 반환
    }

    save(account: Account): Account {
        this.accountList.push(account);
        return account;
    }

    findById(id: string): Account | undefined {
        return this.accountList.find(account => account.id === id);
    }

    findAll(): Account[] {
        return this.accountList;
    }
}

export default AccountRepositoryImpl.getInstance();
