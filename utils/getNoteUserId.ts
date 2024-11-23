import { users } from "../_mapped/_users";

export const getNoteUserId = (note: any) => {
  const noteUserId = note.user.id;
  let userId = "ADMIN";
  let userOldId = noteUserId;

  if (noteUserId === 9) {
    userId = "24a01455-09a2-4a63-aee1-c3331dc48477";
    userOldId = 9;
  }
  users.forEach((user) => {
    if (user.oldId === noteUserId) {
      userId = user.id;
      userOldId = user.oldId;
    }
  });
  return {
    id: userId,
    oldId: userOldId,
  };
};
