import { createContext, useState, useCallback } from "react";
import axios from "axios";

const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState({});

  const fetchPlaylists = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.ss.dev/resource/api/playlists"
      );

      setPlaylists(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateActivePlaylist = useCallback((playlist) => {
    setActivePlaylist(playlist);
  }, []);

  const values = {
    playlists,
    activePlaylist,
    fetchPlaylists,
    updateActivePlaylist,
  };

  return (
    <PlaylistContext.Provider value={values}>
      {children}
    </PlaylistContext.Provider>
  );
}

export { PlaylistContext };
export default PlaylistProvider;
