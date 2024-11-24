import * as fs from "fs";
import {
  mainFolder,
  mappedFolder,
  rolesFolder,
  usersFolder,
} from "../constants";

import { ObjectId } from "mongodb";
import { getCombinedField, getTrimmedName, getTrimmedSurname } from "../utils";
import { getRoleIdByOldId } from "../utils/getRoleIdByOldId";

export const mapUsers = async () => {
  const rawData = fs.readFileSync(`${mainFolder}${usersFolder}index.json`);
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
      name: getTrimmedName(item.name),
      email: `${getCombinedField(item.name)}@avaxfxpg.com`,
      password: "123456",
      phoneNumber: null,
      roleId: getRoleIdByOldId(item.role.id),
      surname: getTrimmedSurname(item.name),
      teamId: null,
      onboardingCompleted: false,
      onboardedSystemVersionInfo: null,
    };
    arr.push(obj);
  });

  fs.writeFileSync(
    `${mappedFolder}${usersFolder}index.json`,
    JSON.stringify(arr)
  );
};

mapUsers();
