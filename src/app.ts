import express from 'express';
import accountRouter from './account/router/account_router';

const app = express();

app.use(express.json()); // For parsing application/json

app.use('/account', accountRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
