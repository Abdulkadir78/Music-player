import { useState, useContext } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { BsThreeDots, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { TiMediaFastForward, TiMediaRewind } from "react-icons/ti";
import { SongContext } from "../../contexts/Song";

function MusicControls({ url }) {
  const {
    audioRef,
    isSongPlaying,
    updateIsSongPlaying,
    handleNextSong,
    handlePrevSong,
  } = useContext(SongContext);

  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    updateIsSongPlaying(true);
    audioRef.current?.play();
  };

  const handlePause = () => {
    updateIsSongPlaying(false);
    audioRef.current.pause();
  };

  const handleMute = () => {
    setIsMuted(true);
    audioRef.current.volume = 0;
  };

  const handleUnmute = () => {
    setIsMuted(false);
    audioRef.current.volume = 1;
  };

  const handleProgress = () => {
    const currProgress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;

    setProgress(currProgress);
  };

  return (
    <div>
      <div className="w-full h-1 rounded-sm my-5 bg-gray-800">
        <div
          className="h-full rounded-sm bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>

      <audio src={url} ref={audioRef} onTimeUpdate={handleProgress} />

      <div className="my-10 flex items-center justify-between">
        <button className="bg-gray-800 p-2 md:p-3 rounded-full">
          <BsThreeDots className="text-lg" />
        </button>

        <div>
          <button className="mx-5" onClick={handlePrevSong}>
            <TiMediaRewind className="text-xl md:text-2xl text-gray-400" />
          </button>

          {isSongPlaying ? (
            <button className="bg-white p-3 rounded-full" onClick={handlePause}>
              <BsPauseFill className="text-xl md:text-2xl text-black" />
            </button>
          ) : (
            <button className="bg-white p-3 rounded-full" onClick={handlePlay}>
              <BsPlayFill className="text-xl md:text-2xl text-black" />
            </button>
          )}

          <button className="mx-5" onClick={handleNextSong}>
            <TiMediaFastForward className="text-xl md:text-2xl text-gray-400" />
          </button>
        </div>

        {isMuted ? (
          <button
            className="bg-gray-800 p-2 md:p-3 rounded-full"
            onClick={handleUnmute}
          >
            <MdVolumeOff className="text-lg text-gray-400" />
          </button>
        ) : (
          <button
            className="bg-gray-800 p-2 md:p-3 rounded-full"
            onClick={handleMute}
          >
            <MdVolumeUp className="text-lg text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MusicControls;
