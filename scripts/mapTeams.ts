import * as fs from "fs";
import { mainFolder, mappedFolder, teamsFolder } from "../constants";
import { ObjectId } from "mongodb";

export const mapTeams = async () => {
  const rawData = fs.readFileSync(`${mainFolder}${teamsFolder}index.json`);
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
      name: (item.name as string).toUpperCase(),
      teamLeaderId: null,
    };
    arr.push(obj);
  });

  fs.writeFileSync(
    `${mappedFolder}${teamsFolder}index.json`,
    JSON.stringify(arr)
  );
};

mapTeams();
