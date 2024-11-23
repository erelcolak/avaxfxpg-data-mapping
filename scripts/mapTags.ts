import * as fs from "fs";
import {
  mainFolder,
  mappedFolder,
  leadsFolder,
  tagsFolder,
} from "../constants";
import { ObjectId } from "mongodb";

export const mapTags = async () => {
  const rawData = fs.readFileSync(`${mainFolder}${leadsFolder}index.json`);
  let parsedData = JSON.parse(rawData.toString());
  let arr: any[] = [];

  parsedData.forEach((item: any) => {
    const date = new Date();

    const obj = {
      // base entity properties
      oldId: item.id,
      _id: { $oid: new ObjectId() },
      createDate: { $date: date },
      updateDate: { $date: date },
      deleted: false,
      // entity properties
      name: item.name as string,
      color: "LIGHT_GREEN",
    };
    arr.push(obj);
  });

  fs.writeFileSync(
    `${mappedFolder}${tagsFolder}index.json`,
    JSON.stringify(arr)
  );
};

mapTags();
