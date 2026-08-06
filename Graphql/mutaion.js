import { gql, useMutation } from "@apollo/client";

const UPDATE_SONG = gql`
  mutation UpdateSong($id: ID!, $title: String!) {
    updateSong(id: $id, title: $title) {
      id
      title
    }
  }
`;

function EditSong({ song }) {
  const [updateSong] = useMutation(UPDATE_SONG);

  const handleUpdate = () => {
    updateSong({
      variables: {
        id: song.id,
        title: "New Song Title",
      },
    });
  };

  return (
    <div>
      <p>{song.title}</p>
      <button onClick={handleUpdate}>Update Song</button>
    </div>
  );
}

export default EditSong;
