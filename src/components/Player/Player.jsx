import { useContext } from "react";

import { SongContext } from "../../contexts/Song";
import MusicControls from "./MusicControls";

function Player() {
  const { activeSong } = useContext(SongContext);

  return activeSong?.title ? (
    <div className="mt-16 lg:ml-28 px-5 lg:px-0 lg:pr-5">
      <h3 className="text-2xl font-medium truncate">{activeSong?.title}</h3>
      <p className="mt-2 text-sm opacity-60">{activeSong?.artist}</p>

      <img
        src={activeSong?.photo}
        alt="cover"
        className="mt-10 w-full h-64 md:h-80 xl:h-[23rem] object-cover mx-auto rounded-lg"
      />

      <MusicControls url={activeSong.url} />
    </div>
  ) : (
    <div className="flex h-[70vh] lg:h-full items-center justify-center">
      <p className="opacity-70 text-sm mt-5">
        Choose a song from the list to start playing
      </p>
    </div>
  );
}

export default Player;
