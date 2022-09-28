const { userAccount } = require("./userAccount");

const getUserName = () => "John Doe";

const getUserPhoneNumber = () => "***********";

const getUserAccount = () => userAccount;

module.exports = {
  getUserName,
  getUserPhoneNumber,
  getUserAccount,
};
