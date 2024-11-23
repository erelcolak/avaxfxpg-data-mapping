export const getNoteTitle = (note: any) => {
  let trimmedNoteTitle = note.title.trim();

  if (trimmedNoteTitle === ".") {
    trimmedNoteTitle = "";
  }

  return trimmedNoteTitle;
};
