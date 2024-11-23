import * as fs from "fs";
import { mainFolder, mappedFolder, rolesFolder } from "../constants";
import { ObjectId } from "mongodb";

export const mapRoles = async () => {
  const rawData = fs.readFileSync(`${mainFolder}${rolesFolder}index.json`);
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
      name: (item.code as string).toUpperCase(),
      permissionList: [],
    };
    arr.push(obj);
  });

  fs.writeFileSync(
    `${mappedFolder}${rolesFolder}index.json`,
    JSON.stringify(arr)
  );
};

mapRoles();
