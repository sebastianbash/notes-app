import { Loader, Navbar, OtherNote } from "../../components";
import { useNotes } from "../../context";

export const Archive = () => {
  const { otherNotes, loading } = useNotes();

  return (
    <>
      <Navbar />
      <div className="main--container">
        <h2 className="text--center">Notas Archivadas</h2>
        <div className="notes--container">
          {otherNotes.archivedNotes.length
            ? otherNotes.archivedNotes.map((note) => (
                <OtherNote key={note.id} note={note} isArchived={true} />
              ))
            : "Archivador vacío"}
        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};
