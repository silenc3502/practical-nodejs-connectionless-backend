import { Request, Response } from "express";

import {AccountService} from "../service/account_service";
import {AccountServiceImpl} from "../service/account_service_impl";
import {AccountCreateRequestForm} from "./request_form/account_create_request_form";
import {AccountCreateResponseForm} from "./response_form/account_create_response_form";


class AccountController {
    private static instance: AccountController;
    private accountService: AccountService;

    private constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    public static getInstance(): AccountController {
        if (!AccountController.instance) {
            AccountController.instance = new AccountController(AccountServiceImpl.getInstance());
        }
        return AccountController.instance;
    }

    async createAccount(req: Request, res: Response): Promise<Response> {
        try {
            const requestForm = new AccountCreateRequestForm(req.body);
            const accountCreateResponse = this.accountService.createAccount(requestForm.toCreateRequestForm());
            const accountCreateResponseForm = AccountCreateResponseForm.fromAccountCreateResponse(accountCreateResponse);
            return res.status(201).json(accountCreateResponseForm);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            return res.status(400).json({ error: errorMessage });
        }
    }
}

export default AccountController.getInstance();
