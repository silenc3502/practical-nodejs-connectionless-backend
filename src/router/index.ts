import { Router } from "express";
import AccountRouter from "../account/router/account_router";

const router = Router();

router.use("/accounts", AccountRouter);

export default router;
