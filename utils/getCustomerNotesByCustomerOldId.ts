import { bearerToken } from "../constants";

export const getCustomerNotesByCustomerOldId = async (
  customerOldId: number
) => {
  try {
    const res = await fetch(
      `https://crmapi.avaxonline.com/api/v1/notes/${customerOldId}/customer`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "tr,en-US;q=0.9,en;q=0.8,nl;q=0.7",
          authorization: bearerToken,
          "cache-control": "no-cache",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          Referer: "https://crm.avaxonline.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
    if (res.status === 404) {
      return [];
    }
    return await res.json();
  } catch (error) {
    return [];
  }
};
