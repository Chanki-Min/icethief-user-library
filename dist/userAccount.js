import { isNil } from 'lodash';

const checkExistence = (variable) => !isNil(variable);

const userAccount = {
  name: "user account",
};

export { checkExistence, userAccount };
