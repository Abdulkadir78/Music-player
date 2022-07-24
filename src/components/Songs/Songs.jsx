import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { PlaylistContext } from "../../contexts/Playlist";
import { SongContext } from "../../contexts/Song";
import Song from "./Song";

function Songs({ toggleMobileMenu }) {
  const { playlistId } = useParams();
  const { activePlaylist } = useContext(PlaylistContext);
  const { songs, fetchSongs, activeSong, updateActiveSong } =
    useContext(SongContext);

  useEffect(() => {
    fetchSongs(playlistId);
  }, [fetchSongs, playlistId]);

  return (
    <div className="mt-3 px-0 lg:px-10 xl:px-5">
      <h3 className="text-2xl font-medium">{activePlaylist?.title}</h3>

      <div className="opacity-80 relative">
        <input
          type="text"
          placeholder="Search for Song, Artist"
          className="mt-5 w-full bg-slate-800 
          border-none outline-none py-3 px-4 rounded-md focus:ring-0"
        />

        <BsSearch className="absolute right-4 bottom-4 opacity-80 pointer-events-none" />
      </div>

      <div className="mt-10 overflow-auto h-[55vh] lg:h-[72vh] custom-scrollbar pl-1 pr-3">
        {songs?.map((song) => (
          <div
            key={song._id}
            className={`cursor-pointer px-3 py-5 rounded-md ${
              song._id === activeSong?._id && "bg-black bg-opacity-30"
            }`}
            onClick={() => {
              updateActiveSong(song);
              toggleMobileMenu?.();
            }}
          >
            <Song
              id={song._id}
              title={song.title}
              artist={song.artist}
              photo={song.photo}
              duration={song.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
