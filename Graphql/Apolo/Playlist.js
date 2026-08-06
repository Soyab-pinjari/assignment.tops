import { useRouter } from "next/router";

export default function Playlist() {
  const router = useRouter();
  const { playlistId } = router.query;

  return (
    <div>
      <h2>Spotify Playlist</h2>
      <p>Playlist ID: {playlistId}</p>
    </div>
  );
}
