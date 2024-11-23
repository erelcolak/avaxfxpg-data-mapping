import * as fs from "fs";
import { getCustomerNotesByCustomerOldId } from "./getCustomerNotesByCustomerOldId";
import { mainFolder, notesFolder } from "../constants";

export const getAllNotesByCustomerOldId = async (customerOldId: number) => {
  const _personNotes = await getCustomerNotesByCustomerOldId(customerOldId);
  fs.writeFileSync(
    `${mainFolder}${notesFolder}${customerOldId}.json`,
    JSON.stringify(_personNotes)
  );
};
