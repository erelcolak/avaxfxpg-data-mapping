import { getTrimmedName } from "./getTrimmedName";
import { getTrimmedSurname } from "./getTrimmedSurname";

export const getCombinedField = (name: string): string => {
  const _name = getTrimmedName(name);
  const _surname = getTrimmedSurname(name);
  const turkishChars: string[] = [
    "ı",
    "İ",
    "ü",
    "Ü",
    "ö",
    "Ö",
    "ş",
    "Ş",
    "ç",
    "Ç",
    "ğ",
    "Ğ",
  ];
  const englishChars: string[] = [
    "i",
    "I",
    "u",
    "U",
    "o",
    "O",
    "s",
    "S",
    "c",
    "C",
    "g",
    "G",
  ];
  let fullName = (_name + _surname).replace(/\s/g, "");
  turkishChars.forEach((charTR, index) => {
    fullName = fullName.replace(new RegExp(charTR, "g"), englishChars[index]);
  });
  fullName = fullName.replace(/[0-9\W_]+/g, "");
  fullName = fullName.toLowerCase();
  return fullName;
};
