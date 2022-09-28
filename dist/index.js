import { isNil } from 'lodash';

const checkExistence = (variable) => !isNil(variable);

const userAccount = {
  name: "user account",
};

const getUserName = () => "John Doe";

const getUserPhoneNumber = () => "***********";

const getUserAccount = () => userAccount;

export { checkExistence, getUserAccount, getUserName, getUserPhoneNumber };
