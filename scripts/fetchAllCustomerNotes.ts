import * as fs from "fs";
import { customersFolder, mainFolder } from "../constants";
import { getAllNotesByCustomerOldId } from "../utils/getAllNotesByCustomerOldId";

export const fetchAllCustomerNotes = async (fileIndex: number) => {
  const rawData = fs.readFileSync(
    `${mainFolder}${customersFolder}${fileIndex}.json`
  );
  let parsedData = JSON.parse(rawData.toString());
  for (let i = 0; i < parsedData.content.length; i++) {
    const customer = parsedData.content[i];
    await getAllNotesByCustomerOldId(customer.id);
    console.log(`${customer.id} Notları Oluşturuldu`);
  }
};

// invoke
fetchAllCustomerNotes(0);
