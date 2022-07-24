import { useContext } from "react";
import { Link } from "react-router-dom";

import { PlaylistContext } from "../../contexts/Playlist";

function Playlists({ isMobile = false, toggleMobileMenu }) {
  const { playlists, activePlaylist, updateActivePlaylist } =
    useContext(PlaylistContext);

  return playlists?.map((playlist) => (
    <Link to={`/playlists/${playlist.id}`} key={playlist.id}>
      <button
        className={`text-xl my-9 block truncate ${isMobile && "mx-auto"} ${
          playlist.id !== activePlaylist.id && "opacity-50"
        } `}
        onClick={() => {
          updateActivePlaylist(playlist);
          toggleMobileMenu?.();
        }}
      >
        {playlist.title}
      </button>
    </Link>
  ));
}

export default Playlists;
