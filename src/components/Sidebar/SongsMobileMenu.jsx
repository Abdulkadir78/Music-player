import { MdClose } from "react-icons/md";

import Songs from "../Songs/Songs";

function SongsMobileMenu({ toggleMenu }) {
  return (
    <div
      className="bg-background z-20 w-full min-h-full fixed top-0 right-0
        flex flex-col items-center"
    >
      <MdClose className="text-3xl self-end mr-3 mt-12" onClick={toggleMenu} />

      <div className="mt-5 w-10/12">
        <Songs toggleMobileMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default SongsMobileMenu;
