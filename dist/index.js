import { userAccount } from './userAccount.js';
export { checkExistence } from './userAccount.js';

const getUserName = () => "John Doe";

const getUserPhoneNumber = () => "***********";

const getUserAccount = () => userAccount;

export { getUserAccount, getUserName, getUserPhoneNumber };
