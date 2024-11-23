export const getPlatformId = (customer: any): string | null => {
  if (customer.metaAccountList && customer.metaAccountList[0].login) {
    return customer.metaAccountList[0].login;
  } else {
    return null;
  }
};
