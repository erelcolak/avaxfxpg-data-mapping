import * as fs from "fs";
import { mainFolder, mappedFolder, rolesFolder } from "../constants";

export const getRoleIdByOldId = (oldId: number) => {
  const rawData = fs.readFileSync(`${mappedFolder}${rolesFolder}index.json`);
  let parsedData = JSON.parse(rawData.toString());
  let obj = parsedData.find((item) => item.oldId === oldId);
  return obj["_id"];
};
