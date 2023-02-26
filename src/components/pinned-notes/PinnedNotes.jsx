import { Notes } from "../notes/Notes";

export const PinnedNotes = ({ notes }) => {
  return (
    <>
      <h2 className="text--center">Notas fijadas</h2>
      {notes
        .filter((note) => note.isPinned)
        .map((note) => (
          <Notes key={note.id} note={note} />
        ))}
    </>
  );
};
