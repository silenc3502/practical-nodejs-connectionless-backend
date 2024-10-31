import { v4 as uuidv4 } from 'uuid';

export class Account {
    constructor(
        public id: string,
        public email: string
    ) {}

    static create({ email }: { email: string }): Account {
        return new Account(uuidv4(), email);
    }
}
