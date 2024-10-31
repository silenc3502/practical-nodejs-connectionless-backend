import { Router, Request, Response } from "express";
import AccountController from "../controller/account_controller";

const router = Router();

// @ts-ignore
router.post("/create", async (req: Request, res: Response) => {
    const accountController = AccountController;
    return await accountController.createAccount(req, res)
});

export default router;
