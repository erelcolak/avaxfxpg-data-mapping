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
          authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhenJheSIsInJvbGUiOiJhZG1pbiIsImF1dGhvcml0eSI6WyJhbmFzYXlmYSIsImN1c3RvbWVyX2luZm9fYWdncmVnYXRpb24iLCJkYXRhX2VrbGUiLCJkYXRhX2d1bmNlbGxlbWUiLCJkYXRhX3NpbG1lIiwiZG9rdW1hbl9tZW51IiwiZ29vZ2xlX3NoZWV0X2xpc3Rlc2kiLCJoYXRpcmxhdGljaV9la2xlIiwiaGF0aXJsYXRpY2lfbGlzdGVzaSIsImtheW5ha19kZXRheSIsImtheW5ha19la2xlIiwia2F5bmFrX2xpc3Rlc2kiLCJsZWFkX2RldGF5IiwibGVhZF9la2xlIiwibGVhZF9saXN0ZXNpIiwibGVhZF9tZW51IiwibWV0YTRfbGlzdGVsZXJpIiwibXVzdGVyaV9hZGkiLCJtdXN0ZXJpX2RldGF5IiwibXVzdGVyaV9la2xlIiwibXVzdGVyaV9lbWFpbF9hZHJlc2kiLCJtdXN0ZXJpX2d1bmNlbGxlIiwibXVzdGVyaV9pbmRpcm1lIiwibXVzdGVyaV9saXN0ZXNpIiwibXVzdGVyaV9saXN0ZXNpX2F0YW1hX2d1bmNlbGxlbWUiLCJtdXN0ZXJpX2xpc3Rlc2lfbGVhZF9ndW5jZWxsZW1lIiwibXVzdGVyaV9saXN0ZXNpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwibXVzdGVyaV9saXN0ZXNpX3RvcGx1X2d1bmNlbGxlbWUiLCJtdXN0ZXJpX21lbnUiLCJtdXN0ZXJpX3NvcnVtbHVfcGVyc29uZWwiLCJtdXN0ZXJpX3NveWFkaSIsIm11c3RlcmlfdGVsZWZvbl9udW1hcmFzaSIsIm5vdF9la2xlbWUiLCJub3RfZ29ydW50dWxlbWUiLCJwZXJzb25lbF9kZXRhecSxIiwicGVyc29uZWxfZWtsZSIsInBlcnNvbmVsX2xpc3Rlc2kiLCJwZXJzb25lbF9tZW51IiwicGVyc29ubmVsX21lbnUiLCJyYXBvcl9tZW51IiwicmFwb3JfbXVzdGVyaV9kdXJ1bXUiLCJyb2xfbWVudSIsInJvbF92ZV95ZXRraWxlbmRpcm1lIiwicm9sX3ZlX3lldGtpbGVuZGlybWVfZGV0YXkiLCJyb2xfdmVfeWV0a2lsZW5kaXJtZV9saXN0ZXNpIiwic2F0aXNfbXVzdGVyaV9la2xlIiwidGFraW1fZGV0YXkiLCJ0YWtpbV9la2xlIiwidGFraW1fbGlzdGVzaSIsInRha2ltX21lbnUiLCJ0b3BsdV9tdXN0ZXJpX2VrbGUiLCJ0dW1faGFyZWtldF9nZWNtaXNpIiwidHVtX211c3Rlcmlfbm90bGFyaSIsInR1bV9tdXN0ZXJpX3NvcnVtbHVfa2lzaV9nZWNtaXNpIiwieW9uZXRpbV9tZW51Il0sIm10NEVuYWJsZSI6ZmFsc2UsImlkIjo0LCJpc0Nvbm5lY3RQYW5lbCI6ZmFsc2UsImV4cCI6MTczMjQwNjg2MywiaWF0IjoxNzMyMzYzNjYzLCJtdDVFbmFibGUiOmZhbHNlLCJncm91cCI6eyJpZCI6MSwiY29kZSI6bnVsbCwibmFtZSI6IlnDtm5ldGljaSJ9fQ.OYx5D79l2qdDzBdIlws6ebgUbZCPE4Bkfsgix4DbxTd52V9rf1li0N1U2Cgu8wB6Jx9BTIEbcMQRgmm5tfntaA",
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
