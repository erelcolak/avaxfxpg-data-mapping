import * as fs from "fs";
import { mainFolder, datasourcesFolder, customersFolder } from "../constants";

export const generateDatasourceNamesFromCustomers = async () => {
  const datasourceNames: any[] = [];
  for (let i = 0; i < 28; i++) {
    const rawData = fs.readFileSync(`${mainFolder}${customersFolder}${i}.json`);
    let parsedData = JSON.parse(rawData.toString());

    parsedData.content.forEach((item: any) => {
      let tempSource = "";
      if (item.source) {
        tempSource = item.source;
      } else if (item.source2) {
        tempSource = item.source2;
      } else if (item.source3) {
        tempSource = item.source3;
      }

      if (datasourceNames.indexOf(tempSource) === -1) {
        datasourceNames.push(tempSource);
      }
    });
  }

  fs.writeFileSync(
    `${mainFolder}${datasourcesFolder}generatedDatasources.json`,
    JSON.stringify(datasourceNames)
  );
};

generateDatasourceNamesFromCustomers();
