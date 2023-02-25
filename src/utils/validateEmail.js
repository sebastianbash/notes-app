/* eslint-disable no-useless-escape */
export const validateMail = (mailData) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailData);
};
