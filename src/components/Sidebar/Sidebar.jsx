import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { PlaylistContext } from "../../contexts/Playlist";
import Profile from "../../assets/images/profile.svg";
import MobileNav from "./MobileNav";
import Playlists from "./Playlists";
import Brand from "./Brand";

function Sidebar() {
  const { playlistId } = useParams();
  const { playlists, fetchPlaylists, updateActivePlaylist } =
    useContext(PlaylistContext);

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await fetchPlaylists();

      if (data?.length > 0) {
        if (playlistId) {
          const currentPlaylist = data?.find(
            (playlist) => playlist.id === Number(playlistId)
          );
          updateActivePlaylist(currentPlaylist);
          return;
        }

        updateActivePlaylist(data[0]);
      }
    };

    getPlaylists();
  }, []);

  return (
    <>
      <div className="relative h-[90vh] hidden lg:block">
        <Brand />

        <div className="mt-14">
          <Playlists />
        </div>

        <img src={Profile} alt="profile" className="absolute bottom-0" />
      </div>

      <div className="lg:hidden">
        <MobileNav playlists={playlists} />
      </div>
    </>
  );
}

export default Sidebar;
