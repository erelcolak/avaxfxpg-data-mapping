import { tags } from "../_mapped/_tags";

export const getTagIds = (customer: any): [string] => {
  const _tag = tags.find((tag) => tag.oldId === customer.leadState.id);
  return [_tag?.id as string];
};
