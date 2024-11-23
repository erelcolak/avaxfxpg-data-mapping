import { bearerToken } from "../constants";

export const getAllCustomers = async (pageNumber: number = 0) => {
  try {
    const res = await fetch(
      `https://api.joyfxcrm.com/api/v1/customers?page=${pageNumber}&name=&surname=&phoneNumber=&isCalled=&leadStateId=0&userId=0&source=&metaId=&getLeadChangeAndNote=false&size=2000&sort=id,desc`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "tr,en-US;q=0.9,en;q=0.8,nl;q=0.7",
          authorization: bearerToken,
          "cache-control": "no-cache",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
        },
        referrer: "https://joyfxcrm.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    );
    if (res.status === 404) {
      return [];
    }
    console.log(res);
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
