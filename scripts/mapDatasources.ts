import * as fs from "fs";
import {
  mainFolder,
  mappedFolder,
  leadsFolder,
  tagsFolder,
  datasourcesFolder,
} from "../constants";
import { ObjectId } from "mongodb";

export const mapDatasources = async () => {
  const rawData = fs.readFileSync(
    `${mainFolder}${datasourcesFolder}index.json`
  );
  let parsedData = JSON.parse(rawData.toString());
  let arr: any[] = [];

  parsedData.forEach((item: any) => {
    const date = new Date();

    const obj = {
      // base entity properties
      oldId: item,
      _id: { $oid: new ObjectId() },
      createDate: { $date: date },
      updateDate: { $date: date },
      deleted: false,
      // entity properties
      name: item,
    };
    arr.push(obj);
  });

  fs.writeFileSync(
    `${mappedFolder}${datasourcesFolder}index.json`,
    JSON.stringify(arr)
  );
};

mapDatasources();
