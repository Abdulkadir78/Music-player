import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlaylistProvider from "./contexts/Playlist";
import SongProvider from "./contexts/Song";

import WithSidebar from "./components/Misc/WithSidebar";
import PlaylistById from "./components/PlaylistById";
import Home from "./components/Home";

function App() {
  return (
    <PlaylistProvider>
      <SongProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<WithSidebar />}>
              <Route path="/" element={<Home />} />
              <Route path="/playlists/:playlistId" element={<PlaylistById />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SongProvider>
    </PlaylistProvider>
  );
}

export default App;
