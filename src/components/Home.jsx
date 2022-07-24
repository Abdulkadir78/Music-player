import Player from "./Player/Player";
import Songs from "./Songs/Songs";

function Home() {
  return (
    <>
      <div className="hidden lg:block lg:w-6/12 xl:w-4/12">
        <Songs />
      </div>
      <div className="lg:w-7/12 xl:w-5/12">
        <Player />
      </div>
    </>
  );
}

export default Home;
