export const getTrimmedName = (name: string): string => {
  return name.split(" ").slice(0, -1).join(" ").trim();
};
