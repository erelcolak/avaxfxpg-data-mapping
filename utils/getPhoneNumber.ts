export const getPhoneNumber = (customer: any): string => {
  return customer.phoneNumberList[0].phoneNumber;
};
