export const getTrimmedSurname = (name: string): string => {
  return name.split(" ").slice(-1).join(" ").trim();
};
