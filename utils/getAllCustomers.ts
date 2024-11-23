export const getAllCustomers = async (pageNumber: number = 0) => {
  try {
    const res = await fetch(
      `https://api.joyfxcrm.com/api/v1/customers?page=${pageNumber}&name=&surname=&phoneNumber=&isCalled=&leadStateId=0&userId=0&source=&metaId=&getLeadChangeAndNote=false&size=2000&sort=id,desc`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "tr,en-US;q=0.9,en;q=0.8,nl;q=0.7",
          authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmVsYyIsInJvbGUiOiJhZG1pbiIsImF1dGhvcml0eSI6WyJhbmFzYXlmYSIsImRhdGFfZWtsZSIsImRhdGFfZ3VuY2VsbGVtZSIsImhhdGlybGF0aWNpX2VrbGUiLCJoYXRpcmxhdGljaV9saXN0ZXNpIiwia2F5bmFrX2RldGF5Iiwia2F5bmFrX2VrbGUiLCJsZWFkX2VrbGUiLCJtdXN0ZXJpX2FkaSIsIm11c3RlcmlfZGV0YXkiLCJtdXN0ZXJpX2VrbGUiLCJtdXN0ZXJpX2VtYWlsX2FkcmVzaSIsIm11c3RlcmlfZ3VuY2VsbGUiLCJtdXN0ZXJpX2xpc3Rlc2kiLCJtdXN0ZXJpX2xpc3Rlc2lfbGVhZF9ndW5jZWxsZW1lIiwibXVzdGVyaV9saXN0ZXNpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwibXVzdGVyaV9saXN0ZXNpX3RvcGx1X2d1bmNlbGxlbWUiLCJtdXN0ZXJpX21lbnUiLCJtdXN0ZXJpX3NvcnVtbHVfcGVyc29uZWwiLCJtdXN0ZXJpX3NveWFkaSIsIm11c3RlcmlfdGVsZWZvbl9udW1hcmFzaSIsIm5vdF9la2xlbWUiLCJub3RfZ29ydW50dWxlbWUiLCJwZXJzb25lbF9kZXRhecSxIiwicGVyc29uZWxfZWtsZSIsInBlcnNvbmVsX2xpc3Rlc2kiLCJyb2xfdmVfeWV0a2lsZW5kaXJtZSIsInNhdGlzX211c3RlcmlfZWtsZSIsInRha2ltX2RldGF5IiwidGFraW1fbGlzdGVzaSIsInRha2ltX21lbnUiLCJ0b3BsdV9tdXN0ZXJpX2VrbGUiLCJ0dW1faGFyZWtldF9nZWNtaXNpIiwidHVtX211c3Rlcmlfbm90bGFyaSIsInR1bV9tdXN0ZXJpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwieW9uZXRpbV9tZW51Il0sIm10NEVuYWJsZSI6ZmFsc2UsImlkIjo2MSwiaXNDb25uZWN0UGFuZWwiOmZhbHNlLCJleHAiOjE3MjY5OTUzOTMsImlhdCI6MTcyNjk1MjE5MywibXQ1RW5hYmxlIjp0cnVlLCJncm91cCI6eyJpZCI6MSwiY29kZSI6bnVsbCwibmFtZSI6IlnDtm5ldGljaSJ9fQ.Y5DCfgwHKznio2Y-d_kqgZJ7Fv0NKDCKnU51sNnoa47sSGNgx938B7kyXPKYrrH7vM33GJ6x73mofItsNYbMCA",
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
