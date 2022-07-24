import { useState } from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";

import Brand from "./Brand";
import SongsMobileMenu from "./SongsMobileMenu";
import PlaylistMobileMenu from "./PlaylistMobileMenu";

function MobileNav() {
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);
  const [showSongsMenu, setShowSongsMenu] = useState(false);

  const togglePlaylistMenu = () => {
    setShowPlaylistMenu((prevState) => !prevState);
  };

  const toggleSongsMenu = () => {
    setShowSongsMenu((prevState) => !prevState);
  };

  return (
    <div className="z-30 relative">
      <div className="flex items-center justify-between">
        <MdOutlineQueueMusic
          className="text-3xl"
          onClick={togglePlaylistMenu}
        />
        <Brand />
        <IoMusicalNotesSharp className="text-2xl" onClick={toggleSongsMenu} />
      </div>

      {showPlaylistMenu && (
        <PlaylistMobileMenu toggleMenu={togglePlaylistMenu} />
      )}

      {showSongsMenu && <SongsMobileMenu toggleMenu={toggleSongsMenu} />}
    </div>
  );
}

export default MobileNav;
