import { MdClose } from "react-icons/md";

import Profile from "../../assets/images/profile.svg";
import Playlists from "./Playlists";

function PlaylistMobileMenu({ toggleMenu }) {
  return (
    <div
      className="bg-background z-20 w-full min-h-full fixed top-0 right-0
        flex flex-col items-center"
    >
      <MdClose className="text-3xl self-end mr-3 mt-12" onClick={toggleMenu} />

      <div className="mt-14">
        <Playlists toggleMobileMenu={toggleMenu} isMobile={true} />
      </div>

      <img
        src={Profile}
        alt="profile"
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}

export default PlaylistMobileMenu;
