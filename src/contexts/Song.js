import { createContext, useState, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import axios from "axios";

const SongContext = createContext();

function SongProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [activeSong, setActiveSong] = useState({});

  const fetchSongs = useCallback(async (playlistId) => {
    try {
      const id = playlistId ?? 1;

      const response = await axios.get(
        `https://api.ss.dev/resource/api/songs/${id}`
      );

      setSongs(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateActiveSong = (song) => {
    activeSong?.title && handleStop();
    flushSync(() => {
      setActiveSong(song);
    });

    setIsSongPlaying(true);
    audioRef.current.play();
  };

  const updateIsSongPlaying = (isPlaying) => {
    setIsSongPlaying(isPlaying);
  };

  const handleStop = () => {
    setIsSongPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleNextSong = () => {
    handleStop();
    const activeSongId = activeSong._id;
    const activeSongIndex = songs.findIndex(
      (song) => song._id === activeSongId
    );

    if (activeSongIndex === songs.length - 1) {
      setActiveSong(songs[0]);
    } else {
      setActiveSong(songs[activeSongIndex + 1]);
    }

    setIsSongPlaying(true);
    audioRef.current.play();
  };

  const handlePrevSong = () => {
    handleStop();
    const activeSongId = activeSong._id;
    const activeSongIndex = songs.findIndex(
      (song) => song._id === activeSongId
    );

    if (activeSongIndex === 0) {
      setActiveSong(songs[songs.length - 1]);
    } else {
      setActiveSong(songs[activeSongIndex - 1]);
    }

    setIsSongPlaying(true);
    audioRef.current.play();
  };

  const values = {
    audioRef,
    songs,
    fetchSongs,
    activeSong,
    updateActiveSong,
    isSongPlaying,
    updateIsSongPlaying,
    handleStop,
    handleNextSong,
    handlePrevSong,
  };

  return <SongContext.Provider value={values}>{children}</SongContext.Provider>;
}

export { SongContext };
export default SongProvider;
